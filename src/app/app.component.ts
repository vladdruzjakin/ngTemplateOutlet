import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  public listImg = {
    img: {
      src: [
        'https://lh3.googleusercontent.com/proxy/PAFOaFRnpE16mRH2kVL4s39lU4n_f7KVMVb7_qmon2tyNFf7aNWQJLZC_11lvFbw3krOnXfCZjpE98L9_KK_o1PoY3PhDQ',
        'https://gdefon.org/_ph/4/2/236562616.jpg',
        'https://anapet.info/wp-content/uploads/2010/08/super-nt-800.jpg',
        'https://anapet.info/wp-content/uploads/2010/02/istok-800.jpg'
      ]
    }
  };
}
