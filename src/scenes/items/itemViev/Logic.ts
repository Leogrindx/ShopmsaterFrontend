const viceVersa = (num: number) =>{
  if(num > 0) return -num
  if(num < 0) return Math.abs(num)
}
class LogicItem {
  slider(n:any, image: string[]){
      let image_itemDetails: any = document.getElementById('image_itemDetails');
      image_itemDetails.src = image[n];
  }

  increase(e:any){
    console.log(e)
    let x = viceVersa((e.screenX-560-250)/1.5)
    let y = viceVersa((e.clientY-93-350)/1.5)
    let image_itemDetails:any = document.getElementById('image_itemDetails');
    image_itemDetails.setAttribute("style", `transform: scale(3, 3) translate(${x}px, ${y}px);`);
  }
  
  reduction(e:any){
    let image_itemDetails: any = document.getElementById('image_itemDetails');
    image_itemDetails.setAttribute("style", `transform: scale(1, 1) translate(0px, 0%);`);
  }

}

export default new LogicItem()