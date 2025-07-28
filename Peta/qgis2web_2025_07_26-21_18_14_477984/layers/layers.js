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
var format_LandSurfaceTemperatureLST_1 = new ol.format.GeoJSON();
var features_LandSurfaceTemperatureLST_1 = format_LandSurfaceTemperatureLST_1.readFeatures(json_LandSurfaceTemperatureLST_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandSurfaceTemperatureLST_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandSurfaceTemperatureLST_1.addFeatures(features_LandSurfaceTemperatureLST_1);
var lyr_LandSurfaceTemperatureLST_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandSurfaceTemperatureLST_1, 
                style: style_LandSurfaceTemperatureLST_1,
                popuplayertitle: 'Land Surface Temperature (LST)',
                interactive: true,
    title: 'Land Surface Temperature (LST)<br />\
    <img src="styles/legend/LandSurfaceTemperatureLST_1_0.png" /> 24,5 - 30,3<br />\
    <img src="styles/legend/LandSurfaceTemperatureLST_1_1.png" /> 30,3 - 34,1<br />\
    <img src="styles/legend/LandSurfaceTemperatureLST_1_2.png" /> 34,1 - 38,2<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_LandSurfaceTemperatureLST_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LandSurfaceTemperatureLST_1];
lyr_LandSurfaceTemperatureLST_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Wilayah': 'Wilayah', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'Provinsi': 'Provinsi', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'Prevalensi Balita Stunting': 'Prevalensi Balita Stunting', 'Persentase Keluarga Sasaran dengan Jamban Tidak Layak': 'Persentase Keluarga Sasaran dengan Jamban Tidak Layak', 'POI Distance Fasilitas Kesehatan': 'POI Distance Fasilitas Kesehatan', 'Rata-rata Pengeluaran Per Kapita Makanan': 'Rata-rata Pengeluaran Per Kapita Makanan', 'Persentase Balita Mendapat Imunisasi Dasar Lengkap': 'Persentase Balita Mendapat Imunisasi Dasar Lengkap', 'Rata-rata Lama Sekolah Perempuan': 'Rata-rata Lama Sekolah Perempuan', 'O3': 'O3', 'NDVI': 'NDVI', 'LST': 'LST', });
lyr_LandSurfaceTemperatureLST_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Wilayah': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'Provinsi': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'Prevalensi Balita Stunting': 'TextEdit', 'Persentase Keluarga Sasaran dengan Jamban Tidak Layak': 'TextEdit', 'POI Distance Fasilitas Kesehatan': 'TextEdit', 'Rata-rata Pengeluaran Per Kapita Makanan': 'Range', 'Persentase Balita Mendapat Imunisasi Dasar Lengkap': 'TextEdit', 'Rata-rata Lama Sekolah Perempuan': 'TextEdit', 'O3': 'TextEdit', 'NDVI': 'TextEdit', 'LST': 'TextEdit', });
lyr_LandSurfaceTemperatureLST_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Wilayah': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM2_REF': 'hidden field', 'ADM2ALT1EN': 'hidden field', 'ADM2ALT2EN': 'hidden field', 'Provinsi': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'Prevalensi Balita Stunting': 'hidden field', 'Persentase Keluarga Sasaran dengan Jamban Tidak Layak': 'hidden field', 'POI Distance Fasilitas Kesehatan': 'hidden field', 'Rata-rata Pengeluaran Per Kapita Makanan': 'hidden field', 'Persentase Balita Mendapat Imunisasi Dasar Lengkap': 'hidden field', 'Rata-rata Lama Sekolah Perempuan': 'hidden field', 'O3': 'hidden field', 'NDVI': 'hidden field', 'LST': 'inline label - visible with data', });
lyr_LandSurfaceTemperatureLST_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});