/* eslint-disable max-params */
/* eslint-disable no-unused-vars */
import { Component } from './component';

export class movies extends Component {
  // eslint-disable-next-line max-params

  constructor(
    selector: string,
    // eslint-disable-next-line no-unused-vars
    public id: number,
    public name: string,
    public creator: string,
    public year: number,

    public watched: boolean,
    public score: number,
    public emmies: number
  ) {
    super(selector);
    // Alt this.brand = brand
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
   <li class="serie">
              <img class="serie__poster" src="https://www.cine.com/media/series/2711.jpg" alt="6 feet under poster" />
              <h4 class="serie__title">${this.name}this</h4>
              <p class="serie__info">${this.creator}${this.year}{}</p>
              <ul class="${this.score}">
                <li class="${this.score}">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
    `;
  }
}
