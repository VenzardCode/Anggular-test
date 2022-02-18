import {Component, OnInit} from '@angular/core';
import {SquareInterface} from "../types/square-interface";
import {checkColorInterface} from "../types/check-color-interface";

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css']
})
export class SquaresComponent implements OnInit {

  public squares: SquareInterface[] = [];

  constructor() {

  }

  ngOnInit(): void {
      this.genSquares();
  }

  public genSquares(): void {
    this.squares=[];
    let id=0;
    let targetSquare: checkColorInterface = {
      color: 'blue',
      checked: false

    }
    const colors: checkColorInterface[] = [
      {
        color:'green',
        checked:false,
      },
      {
        color:'purple',
        checked:false,
      },
      {
        color:'red',
        checked:false,
      },
      {
        color:'yellow',
        checked:false,
      },      {
        color:'white',
        checked:false,
      }
    ];
      let numTarget=this.randomNumber(1,3);
      for ( id;id<numTarget;id++){
        this.squares.push({id:id,...targetSquare});
    }
      for (id;id<6;id++){
        let randColor=colors[this.randomNumber(0,colors.length)];
        this.squares.push({id:id,...randColor})
      }
  }

  public checkSquare(id: number) {
    this.squares.forEach((el: SquareInterface) => {
      if (el.id === id) {
        el.checked = !el.checked;
      }
    })
  }
  public checkCondition(): void {
    let targetsArr: SquareInterface[] = [];
    this.squares.forEach((square: SquareInterface) => {
      if (square.checked) {
        targetsArr.push(square);
      }
    });
    if (targetsArr.every(target => target.checked && target.color === 'blue')) {
      alert('Првильный выбор');
      this.genSquares();
    } else {
      alert('Не правильный выбор')
    }
  }
  public randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

}
