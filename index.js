
function openNav() {

    document.getElementById("mySidenav").style.width = "20%";
  }
  

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  fetch('Naiyer_Abbas.jpg')
        .then(response =>{
          console.log(response);
          return response.blob();
        })
        .then(blob =>{
          console.log(blob);
          document.getElementById('myImage').src = URL.createObjectURL(blob);
        });

