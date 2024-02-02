// let countries = [];
// let states = [];
// let cities = [];
let url = "https://script.google.com/macros/s/AKfycbw8KTpeCxAlGaRIYe9yfiTwODGngT25h7zmeBcPMwUCTMRHM-rJj6HUlFKRTjMwBK_J0w/exec"

// fetch('./js/countries.json')
//     .then((response) => response.json())
//     .then((json) => countries = json);

// fetch('./js/states.json')
//     .then((response) => response.json())
//     .then((json) => states = json);

// fetch('./js/cities.json')
//     .then((response) => response.json())
//     .then((json) => cities = json);

// window.onload = function () {
	
// 	//Get html elements
// 	var countySel = document.getElementById("country");
// 	var stateSel = document.getElementById("state");	
// 	var citySel = document.getElementById("city");

    
//     console.log(states);
	
// 	//Load countries
//     countries.forEach(item => {
// 		countySel.options[countySel.options.length] = new Option(item.name, item.id);
//     })
	
// 	//County Changed
// 	countySel.onchange = function () {
		 
// 		stateSel.length = 1; // remove all options bar first
// 		citySel.length = 1; // remove all options bar first
        
//         let value = parseInt(countySel.value)
		 
// 		if (value < 1)
// 			return; // done
		
//         states.forEach(item => {
//             if (item.country_id === value) {
//                 stateSel.options[stateSel.options.length] = new Option(item.name, item.id);
//             }
//         })
// 	}
	
// 	//State Changed
// 	stateSel.onchange = function () {		 
		 
// 		citySel.length = 1; // remove all options bar first
// 		let value = parseInt(stateSel.value)

// 		if (value < 1)
// 			return; // done
		 
//         cities.forEach(item => {
//             if (item.state_id === value) {
//                 citySel.options[citySel.options.length] = new Option(item.name, item.id);
//             }
//         })
// 	}
// }

let dataLocation = []

async function onSubmit() {
    // console.log('12312')

    $('#submit span').hide();
    $('#submit .loader').show();

    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let address = document.getElementById("address").value
    let content = document.getElementById("content").value
    // let soluong = document.getElementById("soluong").value

    // let nguyenban = document.getElementById("nguyenban").value ? 'Có' : 'Không'
    // let sieukhu = document.getElementById("sieukhu").value ? 'Có' : 'Không'
    // let hatvo = document.getElementById("hatvo").value ? 'Có' : 'Không'
    // let sieuvon = document.getElementById("sieuvon").value ? 'Có' : 'Không'

    // let countySel = document.getElementById("country").value;
	// let stateSel = document.getElementById("state").value;	
	// let citySel = document.getElementById("city").value;
	// let zip = document.getElementById("city").value;

    // let country = countries.find(item => item.id === parseInt(countySel))
    // let state = states.find(item => item.id === parseInt(stateSel))
    // let city = cities.find(item => item.id === parseInt(citySel))
    // call api
    const response = await fetch(`${url}?action=postForm&name=${name}&phone=${phone}&address=${address}&noidung=${content}`);
    const data = await response.json();
    
    $('#submit span').show();
    $('#submit .loader').hide();
}

async function getShop() {
    const response = await fetch(`${url}?action=getShop`);
    const data = await response.json();
    dataLocation = data;
    convertData(data);
    convertDataQuan(data);
}

function filterQuan(quan) {
    let shop = document.getElementById('shop');
    shop.textContent = '';
    let filter = dataLocation.filter(item => item[1] === quan);
    convertData(filter);
}

function convertDataQuan(data) {
    let shop = document.getElementById('quan');
    data.forEach(element => {
        if (element[1] !== '') {
            string = `
            <div class="relative flex items-center gap-x-6 rounded p-2 text-sm leading-6 hover:bg-gray-50 cursor-pointer" onclick="filterQuan('${element[1]}')">
                <div class="flex-auto">
                    <div class="block font-semibold text-gray-900">
                        ${element[1]}
                        <span class="absolute inset-0"></span>
                    </div>
                </div> 
            </div>
            `
            shop.insertAdjacentHTML( 'beforeend', string )
        }
    });
}

function convertData(data) {
    let shop = document.getElementById('shop')
    data.forEach(element => {
        if (element[0] !== '') {
            string = `
                <div class="swiper-slide location-item w-[49%] md:w-[24%] bg-[#E3F8D0] pb-4 rounded-lg">
                    <img src="${element[4]}" alt="" srcset="" class="w-full">
                    <div class="text-center font-bold mt-2">${element[0]}</div>
                    <div class="flex gap-2 px-2 mt-2">
                        <b class="text-[13px]">QUẬN:</b> <span class="text-[13px]">${element[1]}</span>
                    </div>
                    <div class="flex gap-2 px-2 mt-2">
                        <b class="text-[13px]">ĐỊA CHỈ:</b> <a href="${element[5]}" target="_blank" class="text-[13px]">${element[2]}</a>
                    </div>
                    <div class="flex gap-2 px-2 mt-2">
                        <b class="text-[13px]">HOTLINE:</b> <span class="text-[13px]">${element[3]}</span>
                    </div>
                </div>
            `
            shop.insertAdjacentHTML( 'beforeend', string )
        }
    });
    slickSlide();
}

function slickSlide() {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
                slidesPerView:4,
                spaceBetween: 30,
              },
          },
      });
}

getShop()