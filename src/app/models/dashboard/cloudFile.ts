import {BillItem} from './bill';

export interface CloudFile {
  id: string;
  filePath: string;
  fileName: string;
  threeDfile: boolean;
  drawingFile: boolean;
  forgeUrn: string;
  forgeBucket: string;
  bill: BillItem[];
  userName: string;
  userId: string;
}
