// $(function (){
// $(".pointer").on('click',function(){
function Asearch() {
    var key = decodeURI(location.search.split('=')[1]);
    // var key = location.search.split('=')[1];

    console.log(key);
    var tval = $('.txt').val(key);
    if (key) {
        console.log(122)
        // $.get('../php/search.php', { "title": key }, function (res) {
        //     console.log(res);
        // if (code == 200) {
        //     var data = res.data;
        //     var str = ``;
        //     for (var i = 0; i < data.length; i++) {
        //         str += `
        //         <a href="" class="block"> <img 
        //         style="width: 530px;height:427px;display:block"
        //         src="${data[i].pic}" alt="">
        //     </a>
        //     <h2 class="fb">￥${data[i].price}</h2>
        //     <h3>飞科剃须刀FS370</h3>
        //     <a href="" class="block">经典爆款/全身水洗/全球电压/智能充电显示/智能防夹须 </a>
        //     <p class="mt12">
        //         本款产品销售量
        //         <span>75959</span>
        //         | &nbsp;评价:
        //         <span>0</span>
        //     </p>
        //         `
        //     }
        // }
        // }, 'json')


        $.ajax({
            type: "GET",
            url: "../php/search.php",
            data: { title: key },
            dataType:"json",
            success: function (res) {
                // console.log(JSON.parse(data).data);
                console.log(res);
                if ( res.code == 200) {
                    var data = res.data;
                    var str = `
                        <a href="" class="block"> <img 
                        style="width: 530px;height:427px;display:block"
                        src="${data.pic}" alt="">
                        </a>
                        <h2 class="fb">￥${data.price}</h2>
                        <h3>${data.title}</h3>
                        <a href="" class="block">${data.about} </a>
                        <p class="mt12">
                            本款产品销售量
                            <span>75959</span>
                            | &nbsp;评价:
                            <span>0</span>
                        </p>`;
                    $(".search-item").html(str);
                }
            }
        });

    }
}
Asearch();
    // })
// })