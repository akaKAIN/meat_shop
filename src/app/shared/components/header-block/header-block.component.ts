import {Component} from '@angular/core';
import {SimpleContactItem} from '../../../models/base';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss']
})
export class HeaderBlockComponent {
  contacts: SimpleContactItem[] = [
    {
      contactTitle: 'WhatsApp',
      contactText: '+7 926 890 6086',
      contactIconType: 'phone',
      contactLink: 'https://wa.me/79098438948'
    },
    {
      contactTitle: 'Instagram',
      contactIconType: 'motion_photos_on',
      contactText: '@realmeat_khv',
      contactLink: 'https://instagram.com/_u/realmeat_khv'
    },
  ];
}
