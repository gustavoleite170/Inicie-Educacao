import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./styles/header-general.component.css', './styles/header-left.component.css', './styles/header-right.component.css', './styles/header-responsive.component.css', './styles/header-right-hamburguer.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _element: ElementRef) {
  }

  ngOnInit(): void {
  }

  toggleHamburguerMenu ($event, $wrapper) {
    $event.stopPropagation()

    $wrapper.classList.toggle('expanded');
    const $body = this._element.nativeElement.closest('body');
    $body.classList.toggle('menuOpen');
  }

  expandSubmenu ($event, arrowIcon, $wrapper?) {
    $event.stopPropagation()

    const $menuToggle = $event.currentTarget;
    const $menuFirst = $event.currentTarget.parentElement;
    const menuFirstHeight = $menuFirst.scrollHeight;

    if ($menuFirst.clientHeight === menuFirstHeight) {
      $menuFirst.style.height = '45px';
      $menuToggle.style.background = '#fff';
    } else {
      $menuFirst.style.height = menuFirstHeight + 'px';
      $menuToggle.style.background = '#f4f4f4';
      setTimeout(() => $menuFirst.style.height = 'unset', 300)
      setTimeout(() => $menuFirst.style.height = menuFirstHeight + 'px', 350)
    }

    arrowIcon.classList.toggle('active')

    if ($wrapper) {
      $wrapper.style.height = 'unset';

      setTimeout(() => {
        const wrapperHeight = $wrapper.scrollHeight;
        $wrapper.style.height = wrapperHeight + 'px';
      }, 350)
    }
  }

}
