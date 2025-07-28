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
var format_HasilModelGWR_1 = new ol.format.GeoJSON();
var features_HasilModelGWR_1 = format_HasilModelGWR_1.readFeatures(json_HasilModelGWR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilModelGWR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilModelGWR_1.addFeatures(features_HasilModelGWR_1);
var lyr_HasilModelGWR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HasilModelGWR_1, 
                style: style_HasilModelGWR_1,
                popuplayertitle: 'Hasil Model GWR',
                interactive: true,
    title: 'Hasil Model GWR<br />\
    <img src="styles/legend/HasilModelGWR_1_0.png" /> -<br />\
    <img src="styles/legend/HasilModelGWR_1_1.png" /> X1, X3, X4, X6, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_2.png" /> X1, X3, X4, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_3.png" /> X1, X4, X6, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_4.png" /> X2<br />\
    <img src="styles/legend/HasilModelGWR_1_5.png" /> X2, X6<br />\
    <img src="styles/legend/HasilModelGWR_1_6.png" /> X2, X6, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_7.png" /> X2, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_8.png" /> X3, X4, X6, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_9.png" /> X3, X4, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_10.png" /> X3, X6, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_11.png" /> X3, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_12.png" /> X6<br />\
    <img src="styles/legend/HasilModelGWR_1_13.png" /> X6, X8<br />\
    <img src="styles/legend/HasilModelGWR_1_14.png" /> X8<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_HasilModelGWR_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HasilModelGWR_1];
lyr_HasilModelGWR_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Wilayah': 'Wilayah', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'Provinsi': 'Provinsi', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'Hasil-Variabel Signfikan': 'Hasil-Variabel Signfikan', 'Hasil-Kode': 'Hasil-Kode', 'Data-Variabel Signfikan': 'Data-Variabel Signfikan', 'Data-Kode': 'Data-Kode', 'Intercept': 'Intercept', 'Koef. X1': 'Koef. X1', 'Koef. X2': 'Koef. X2', 'Koef. X3': 'Koef. X3', 'Koef. X4': 'Koef. X4', 'Koef. X5': 'Koef. X5', 'Koef. X6': 'Koef. X6', 'Koef. X7': 'Koef. X7', 'Koef. X8': 'Koef. X8', });
lyr_HasilModelGWR_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Wilayah': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'Provinsi': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'Hasil-Variabel Signfikan': 'TextEdit', 'Hasil-Kode': 'Range', 'Data-Variabel Signfikan': 'TextEdit', 'Data-Kode': 'Range', 'Intercept': 'TextEdit', 'Koef. X1': 'TextEdit', 'Koef. X2': 'TextEdit', 'Koef. X3': 'TextEdit', 'Koef. X4': 'TextEdit', 'Koef. X5': 'TextEdit', 'Koef. X6': 'TextEdit', 'Koef. X7': 'TextEdit', 'Koef. X8': 'TextEdit', });
lyr_HasilModelGWR_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Wilayah': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM2_REF': 'hidden field', 'ADM2ALT1EN': 'hidden field', 'ADM2ALT2EN': 'hidden field', 'Provinsi': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'Hasil-Variabel Signfikan': 'hidden field', 'Hasil-Kode': 'hidden field', 'Data-Variabel Signfikan': 'inline label - visible with data', 'Data-Kode': 'hidden field', 'Intercept': 'inline label - visible with data', 'Koef. X1': 'inline label - visible with data', 'Koef. X2': 'inline label - visible with data', 'Koef. X3': 'inline label - visible with data', 'Koef. X4': 'inline label - visible with data', 'Koef. X5': 'inline label - visible with data', 'Koef. X6': 'inline label - visible with data', 'Koef. X7': 'inline label - visible with data', 'Koef. X8': 'inline label - visible with data', });
lyr_HasilModelGWR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});