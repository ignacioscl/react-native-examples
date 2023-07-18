export default interface IAddress {
    address1?: string;
  city: string;
  cityShort: string;
  state: string;
  postalCode?: string;
  countryShort: string;
  country: string;
  lat?:number;
  lng?:number;
}