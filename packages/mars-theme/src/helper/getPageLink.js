const getPageLink = (day) => {
    let date;
    switch(day){
      case 'today':
        date = new Date();
        break;
        case 'yesterday':
          date = new Date();
          date.setDate(date.getDate() + 1);
    }
    return('/'+date.getDate()+'-'+(date.getMonth() + 1)+'-'+(date.getFullYear().toString().substr(-2))+'/');
  }
export default getPageLink;  