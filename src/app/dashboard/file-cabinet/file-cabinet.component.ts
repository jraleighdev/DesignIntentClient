import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {environment} from '../../../environments/environment';
import {CloudFile} from '../../models/dashboard/cloudFile';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-file-cabinet',
  templateUrl: './file-cabinet.component.html',
  styleUrls: ['./file-cabinet.component.scss']
})
export class FileCabinetComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('forgeViewer', {static: true}) viewerDiv: ElementRef;
  baseURl = environment.BaseUrl;
  mobileQuery: MediaQueryList;
  public viewer;

  private mobileQueryListener: () => void;

  public service =  this.baseURl + 'PdfViewer';
  public document = 'D:\\Automation\\Solidworks\\Ladder\\Ladder.pdf';

  constructor(public dashBoardService: DashboardService,
              changeDetector: ChangeDetectorRef, media: MediaMatcher) {
                this.mobileQuery = media.matchMedia('(max-width: 800px)');
                this.mobileQueryListener = () => changeDetector.detectChanges();
                this.mobileQuery.addEventListener('resize', this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('resize', this.mobileQueryListener);
  }

  ngAfterViewInit(): void {
      this.dashBoardService.currentFile$.subscribe((file: CloudFile) => {
        if (file !== null) {
          this.launchiewer(file.forgeUrn);
        }
      });
    }

  ngOnInit(): void {

  }

  launchiewer(urn: string)  {
    const options = {
      env: 'AutodeskProduction',
      getAccessToken: (onGetAccessToken: (token: string, expire: number) => void) => {
        // Call back-end API endpoint to get a new token
        // Pass new token and expire time to Viewer's callback method
        this.dashBoardService.getForgeToken()
          .then(data => {
              onGetAccessToken(data.accessToken, data.expires);
            });
      },
      api: 'derivativeV2'
    };

    Autodesk.Viewing.Initializer(options, () => {

      const element = this.viewerDiv.nativeElement as HTMLElement;

      this.viewer = new Autodesk.Viewing.GuiViewer3D(element);
      this.viewer.start();
      const documentId = 'urn:' + urn;
      Autodesk.Viewing.Document.load(documentId, doc => { this.onDocumentLoadSuccess(doc); },
      errorCode => { this.onDocumentLoadFailure(errorCode); });
    });
  }

  onDocumentLoadSuccess(doc) {
    const viewables = doc.getRoot().getDefaultGeometry();
    this.viewer.loadDocumentNode(doc, viewables).then(i => {
      // documented loaded, any action?
    });
  }

  onDocumentLoadFailure(viewerErrorCode) {
    console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
  }

}
