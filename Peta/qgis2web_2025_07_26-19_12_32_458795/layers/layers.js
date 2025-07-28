var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RatarataPengeluaranPerKapitaMakanan_1 = new ol.format.GeoJSON();
var features_RatarataPengeluaranPerKapitaMakanan_1 = format_RatarataPengeluaranPerKapitaMakanan_1.readFeatures(json_RatarataPengeluaranPerKapitaMakanan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RatarataPengeluaranPerKapitaMakanan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RatarataPengeluaranPerKapitaMakanan_1.addFeatures(features_RatarataPengeluaranPerKapitaMakanan_1);
var lyr_RatarataPengeluaranPerKapitaMakanan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RatarataPengeluaranPerKapitaMakanan_1, 
                style: style_RatarataPengeluaranPerKapitaMakanan_1,
                popuplayertitle: 'Rata-rata Pengeluaran Per Kapita Makanan',
                interactive: true,
    title: 'Rata-rata Pengeluaran Per Kapita Makanan<br />\
    <img src="styles/legend/RatarataPengeluaranPerKapitaMakanan_1_0.png" /> 456234 - 661983<br />\
    <img src="styles/legend/RatarataPengeluaranPerKapitaMakanan_1_1.png" /> 661983 - 887415<br />\
    <img src="styles/legend/RatarataPengeluaranPerKapitaMakanan_1_2.png" /> 887415 - 1187989<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_RatarataPengeluaranPerKapitaMakanan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RatarataPengeluaranPerKapitaMakanan_1];
lyr_RatarataPengeluaranPerKapitaMakanan_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Wilayah': 'Wilayah', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'Provinsi': 'Provinsi', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'Prevalensi Balita Stunting': 'Prevalensi Balita Stunting', 'Persentase Keluarga Sasaran dengan Jamban Tidak Layak': 'Persentase Keluarga Sasaran dengan Jamban Tidak Layak', 'POI Distance Fasilitas Kesehatan': 'POI Distance Fasilitas Kesehatan', 'Rata-rata Pengeluaran Per Kapita Makanan': 'Rata-rata Pengeluaran Per Kapita Makanan', 'Persentase Balita Mendapat Imunisasi Dasar Lengkap': 'Persentase Balita Mendapat Imunisasi Dasar Lengkap', 'Rata-rata Lama Sekolah Perempuan': 'Rata-rata Lama Sekolah Perempuan', 'O3': 'O3', 'NDVI': 'NDVI', 'LST': 'LST', });
lyr_RatarataPengeluaranPerKapitaMakanan_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Wilayah': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'Provinsi': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'Prevalensi Balita Stunting': 'TextEdit', 'Persentase Keluarga Sasaran dengan Jamban Tidak Layak': 'TextEdit', 'POI Distance Fasilitas Kesehatan': 'TextEdit', 'Rata-rata Pengeluaran Per Kapita Makanan': 'Range', 'Persentase Balita Mendapat Imunisasi Dasar Lengkap': 'TextEdit', 'Rata-rata Lama Sekolah Perempuan': 'TextEdit', 'O3': 'TextEdit', 'NDVI': 'TextEdit', 'LST': 'TextEdit', });
lyr_RatarataPengeluaranPerKapitaMakanan_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Wilayah': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM2_REF': 'hidden field', 'ADM2ALT1EN': 'hidden field', 'ADM2ALT2EN': 'hidden field', 'Provinsi': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'Prevalensi Balita Stunting': 'hidden field', 'Persentase Keluarga Sasaran dengan Jamban Tidak Layak': 'hidden field', 'POI Distance Fasilitas Kesehatan': 'hidden field', 'Rata-rata Pengeluaran Per Kapita Makanan': 'inline label - visible with data', 'Persentase Balita Mendapat Imunisasi Dasar Lengkap': 'hidden field', 'Rata-rata Lama Sekolah Perempuan': 'hidden field', 'O3': 'hidden field', 'NDVI': 'hidden field', 'LST': 'hidden field', });
lyr_RatarataPengeluaranPerKapitaMakanan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});