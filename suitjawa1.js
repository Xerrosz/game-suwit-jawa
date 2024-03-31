var nilai = 5
var hasil = ""

if ( nilai < 1){
    hasil = "Satu"
}else if(nilai > 5){
    hasil = "Empat"
} else if (nilai == 1 || nilai <= 8){
    hasil = "Dua"
}else if (nilai < 10){
    hasil = "Tiga"
}else {
    hasil = "Nilai Ini tidak di temukan"
}

console.log(hasil)