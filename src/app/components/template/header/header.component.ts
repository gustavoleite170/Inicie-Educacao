import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./styles/header-general.component.css', './styles/header-left.component.css', './styles/header-right.component.css', './styles/header-responsive.component.css', './styles/header-right-hamburguer.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleHamburguerMenu ($event, $wrapper) {
    $event.stopPropagation()

    $wrapper.classList.toggle('expanded');
  }

  expandSubmenu ($event) {
    /* $event.stopPropagation() */

    const $menuToggle = $event.currentTarget;
    const $menuFirst = $event.currentTarget.parentElement;
    const menuFirstHeight = $menuFirst.scrollHeight;

    if ($menuFirst.clientHeight === menuFirstHeight) {
      $menuFirst.style.height = '45px';
      $menuToggle.style.background = '#fff';
    } else {
      $menuFirst.style.height = menuFirstHeight + 'px';
      setTimeout(() => $menuFirst.style.height = 'unset', 200)
      $menuToggle.style.background = '#f4f4f4';
    }
  }

  expandSecondSubmenu ($event) {
    /* $event.stopPropagation() */

    const $menuFirst = $event.currentTarget.parentElement;
    const $menuSecond = $event.currentTarget.parentElement;
    const menuFirstHeight = $menuFirst.scrollHeight + $menuSecond.scrollHeight;
    
    
    if ($menuFirst.clientHeight === menuFirstHeight) {
      $menuFirst.style.height = '45px';
      $event.currentTarget.style.background = '#fff';
    } else {
      $menuFirst.style.height = menuFirstHeight + 'px';
      $event.currentTarget.style.background = '#f4f4f4';
    }

  }

}
