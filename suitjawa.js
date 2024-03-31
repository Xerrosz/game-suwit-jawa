var tanya = true;
while ( tanya ) {
//menangkap pilihan player
var p = prompt ('Pilih : Gajah, Semut, Orang')
//menangkap pilihan komputer
//membangkitkan bilangan random
var comp = Math.random()

if ( comp < 0.34 ) {
    comp = 'gajah';
} else if( comp >= 0.34 && comp < 0.67 ) {
    comp = 'orang';
} else {
    comp = 'semut';
}

var hasil = '';
//menentukan rules
if( p == comp ) {
    hasil = 'Hasilnya SERI!!!';
} else if( p == 'gajah' ) {
    //    if( comp == 'orang' ) {
    //     hasil = 'KAMU MENANG!!!';
    //  } else {
    //     hasil = 'KAMU KALAH!!!';
    //  }

    hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
} else if( p = 'orang' ) {
    hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
} else if ( p == 'semut' ) {
    hasil = ( comp == 'semut' ) ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'Anda memasukkan pilihan yang SALAH!';
}

//tampilkan hasilnya
alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\n Maka hasilnya : Kamu ' + hasil );
tanya = confirm ('lagi?');
}

alert ('Terima kasih sudah bermain abangkuh')