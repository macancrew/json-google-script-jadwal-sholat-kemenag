function sho(){
const d = new Date();
var dx = d.getDate();
var mx = d.getMonth();
var yx = d.getFullYear();
mx = mx+1
mx = ("0" + mx).slice(-2)
dx = ("0" + dx).slice(-2)
var dd = yx+"-"+mx+"-"+dx
var dm = "bln="+mx+"&thn="+yx

var url1 = "https://bimasislam.kemenag.go.id/jadwalshalat";
var spost =
    {
      "method" : "GET",
      "muteHttpExceptions": true,
      "contentType" : "application/x-www-form-urlencoded; charset=UTF-8",
    };
var res = UrlFetchApp.fetch(url1, spost);
var rx = res.getAllHeaders()
var cx = rx['Set-Cookie']
   
var headers = res.getAllHeaders();
var cookies = headers['Set-Cookie']; 
for (var i = 0; i < cookies.length; i++) {
  cookies[i] = cookies[i].split( ';' )[0];
};
    
var cc = cookies[0]+"; "+cookies[1]
var url1 = "https://bimasislam.kemenag.go.id/ajax/getShalatbln";
var da = "x=8VaawGGsT6hIY8jPqc%252FmTm0EDdMEhVdVDz7iLSobARAIUHgiafBLgUqltuSqeNPFSSYJgoR1iBf70rNFLQairQ%253D%253D&y=36MaMMq%252FZ8XK2meT8agTVmT3TGEsRRKPdlLWrwA0uCFMhv1hPOLOWOWgGXWGK7baotFvbEVZFKPtqLvXMPvIvA%253D%253D&bln=1&thn=2023";
//value da adalah provinsi dan kota
//bisa lihat codenya di https://bimasislam.kemenag.go.id/jadwalshalat
//untuk contoh ini adalah papua barat, kota sorong
var hdx = {'Cookie': cc}
var headers = {
        "Cookies": cc,
        "Accept": "application/json"};
var spost =
        {
          "method" : "POST",
          "muteHttpExceptions": true,
          "headers" : hdx,
          "payload" : da,
        };
 
var res = UrlFetchApp.fetch(url1, spost);
var js = JSON.parse(res);
console.log(js)
//hasil akhirnya js, sudah berupa json    
//by macancrew@gmail.com
//telegram @xoerbiston
}
