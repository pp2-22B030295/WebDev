import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    ShareButtonsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[]|undefined;


  constructor() {}

  ngOnInit(): void {
    let product1 = new Product("comp1", "description of comp", 10 , "assets/comp1.jpg" , "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2ODc1OTIxODc1MzQ0MDUzOjE3MDg2ODE2OTg6c3BfYXRmOjMwMDEzOTM1NDM3NTEwMjo6MDo6&url=%2FGTRACING-Computer-Monitor-Ergonomic-Surface%2Fdp%2FB0CMWS6X5T%2Fref%3Dsr_1_1%3Fcrid%3D12QSF5ZUOP4I7%26dib%3DeyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc%26dib_tag%3Dse%26keywords%3Dcomputer%2Bdesk%26qid%3D1708681698%26sprefix%3Dcomputer%252Caps%252C336%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1");
    let product2 = new Product("comp2", "description of comp", 0 , "assets/comp2.jpg" , "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2ODc1OTIxODc1MzQ0MDUzOjE3MDg2ODE2OTg6c3BfYXRmOjIwMDA2NzkyNDk5NzA3MTo6MDo6&url=%2FArozzi-Ultrawide-Management-Adjustable-Water-Resistant%2Fdp%2FB01K1JW52U%2Fref%3Dsr_1_2%3Fcrid%3D12QSF5ZUOP4I7%26dib%3DeyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc%26dib_tag%3Dse%26keywords%3Dcomputer%2Bdesk%26qid%3D1708681698%26sprefix%3Dcomputer%252Caps%252C336%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1");
    let product3 = new Product("comp3", "description of comp", 8,"assets/comp3.jpg", "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2ODc1OTIxODc1MzQ0MDUzOjE3MDg2ODE2OTg6c3BfYXRmOjMwMDEzMjQxOTk1ODcwMjo6MDo6&url=%2FSeventable-Computer-Outlets-Drawers-Keyboard%2Fdp%2FB0CPPCL7FH%2Fref%3Dsr_1_3%3Fcrid%3D12QSF5ZUOP4I7%26dib%3DeyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc%26dib_tag%3Dse%26keywords%3Dcomputer%2Bdesk%26qid%3D1708681698%26sprefix%3Dcomputer%252Caps%252C336%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1");
    let product4  = new Product("comp4", "description of comp", 8,"assets/comp4.jpg", "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2ODc1OTIxODc1MzQ0MDUzOjE3MDg2ODE2OTg6c3BfYXRmOjMwMDEyNTg0NjkwMjgwMjo6MDo6&url=%2FCubiCubi-Computer-Writing-Office-Industrial%2Fdp%2FB084VHPPTC%2Fref%3Dsr_1_4%3Fcrid%3D12QSF5ZUOP4I7%26dib%3DeyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc%26dib_tag%3Dse%26keywords%3Dcomputer%2Bdesk%26qid%3D1708681698%26sprefix%3Dcomputer%252Caps%252C336%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1");
    let product5d = new Product("comp5", "description of comp", 5,"assets/comp5.jpg", "https://www.amazon.com/Seventable-Computer-Outlets-Drawers-Keyboard/dp/B0CPPCL7FH/ref=sr_1_5?crid=12QSF5ZUOP4I7&dib=eyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc&dib_tag=se&keywords=computer+desk&qid=1708681698&sprefix=computer%2Caps%2C336&sr=8-5");
    let product6 = new Product("comp6", "description of comp", 11,"assets/comp6.jpg", "https://www.amazon.com/armocity-Computer-Reversible-Moveable-Workstation/dp/B0BCL3ZVLM/ref=sr_1_6?crid=12QSF5ZUOP4I7&dib=eyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc&dib_tag=se&keywords=computer+desk&qid=1708681698&sprefix=computer%2Caps%2C336&sr=8-6");
    let product7 = new Product("comp7", "description of comp", 8,"assets/comp7.jpg", "https://www.amazon.com/GreenForest-Computer-Drawers-Printer-Monitor/dp/B0BZSDFNDC/ref=sr_1_7?crid=12QSF5ZUOP4I7&dib=eyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc&dib_tag=se&keywords=computer+desk&qid=1708681698&sprefix=computer%2Caps%2C336&sr=8-7");
    let product8= new Product("comp8", "description of comp", 9,"assets/comp8.jpg", "https://www.amazon.com/Furinno-14054BK-GYW-Simplistic-Computer/dp/B00OR1KPL2/ref=sr_1_8?crid=12QSF5ZUOP4I7&dib=eyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc&dib_tag=se&keywords=computer+desk&qid=1708681698&sprefix=computer%2Caps%2C336&sr=8-8");
    let product9 = new Product("comp9", "description of comp", 4,"assets/comp9.jpg", "https://www.amazon.com/ODK-Computer-Outlets-Reversible-Storage/dp/B0BS6FXSB2/ref=sr_1_9?crid=12QSF5ZUOP4I7&dib=eyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc&dib_tag=se&keywords=computer+desk&qid=1708681698&sprefix=computer%2Caps%2C336&sr=8-9");
    let product10 = new Product("comp10", "description of comp", 1,"assets/comp10.jpg", "https://www.amazon.com/ODK-Outlets-Computer-Monitor-Storage/dp/B0C52RF9YM/ref=sr_1_10?crid=12QSF5ZUOP4I7&dib=eyJ2IjoiMSJ9.cFNlBp5jUu_jz_EJQkYnKB4OfCWBqQJdI3ZA03oi98CsZs-dByEupeke3qa_c68BxzhbCG_Xv_7k9f-17uvnd5ZXArhcdVvuYCg_yw0_ve4KOcizsAuggatbQKWnN8dg2FDL6Dp0i6cCmph4sgivbQr5lfNlxaYg5f2NExia067sAzZbGBQysbCjPPM3Nn3rntDpnaMBdWHNJI0r4ac9FKEb7W1lEkviYfjVC59myH1p83ToLMwFNo8Kb-bq-riJCaqMbx_M2xi1vCcqF1AQCn6dB_jlS8OCd0z4MSWTjKY.scoskuAo-cfqGNX1mZstLXwLiAWoE1CTyHFsv4lPLWc&dib_tag=se&keywords=computer+desk&qid=1708681698&sprefix=computer%2Caps%2C336&sr=8-10");

    this.products =[product1,product2,product3,product4,product5,product6,product7,product8,product9,product10];


  }

  navigateByUrl(url:string){
    window.open(url, '_blank');
  }

  protected readonly encodeURIComponent = encodeURIComponent;
}

class Product{
  name:String | undefined;
  description:string | undefined;
  rating:number |undefined;
  img:string | undefined;
  url:string |undefined;

  constructor(name:string, description:string , rating:number, image:string , url:string) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.img = image;
    this.url = url;

  }
}
