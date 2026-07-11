import {readFileSync} from 'fs';
import path  from 'path';
import {parse } from 'csv-parse';
import xlsx from 'xlsx';




function resolveDataPath(relativePath: string): string {

    return  path.resolve(process.cwd(), relativePath);
}   



function pathExists(filePath: string): boolean {

    try{
        readFileSync(filePath);
        return true;
    } catch (error) {
        return false;
    }}


    export class DataProvider {

//<T> - genrei - it allows to write ine resuable function that can work with any data type. I
// t allows to pass any data type as an argument and return any data type as a result.


       static getTestDatafromJson<T>(relativePath: string): T 
        {
return readJsonData<T>(relativePath);
        }


        static getTestDatafromXlsx<T>(relativePath: string, sheetName?: string): T[]
        {
            return readXlsxData<T>(relativePath, sheetName);
        }
 

    }
        export  function readJsonData<T>(relativePath: string): T {

           const filepath =  resolveDataPath(relativePath);

           const contents = readFileSync(filepath, 'utf-8');

           return JSON.parse(contents) as T;


        }


        export function readXlsxData<T>(relativePath: string, sheetName?: string): T[] {

                       const filepath =  resolveDataPath(relativePath);
 
                       const workbook = xlsx.readFile(filepath); //open the excel workbook


                        const resolvedSheetName =  sheetName ?? workbook.SheetNames[0]; //if sheetName is not provided, use the first sheet

                        
                        const worksheet = workbook.Sheets[resolvedSheetName]; //get the sheet by name


                        return xlsx.utils.sheet_to_json<T>(worksheet); 
                        //convert the sheet to json and return it as an array of objects, it will convert rows 
                        // in to Javascript Objects

        }

