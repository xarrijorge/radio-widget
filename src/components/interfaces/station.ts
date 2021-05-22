export default interface Station {
  id: number;
  name: string;
  frequency?: number;
  logo: string;
  [propName: string]: any;
}
