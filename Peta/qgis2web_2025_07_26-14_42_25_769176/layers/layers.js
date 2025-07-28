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
var format_PrevalensiBalitaStunting_1 = new ol.format.GeoJSON();
var features_PrevalensiBalitaStunting_1 = format_PrevalensiBalitaStunting_1.readFeatures(json_PrevalensiBalitaStunting_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrevalensiBalitaStunting_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrevalensiBalitaStunting_1.addFeatures(features_PrevalensiBalitaStunting_1);
var lyr_PrevalensiBalitaStunting_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrevalensiBalitaStunting_1, 
                style: style_PrevalensiBalitaStunting_1,
                popuplayertitle: 'Prevalensi Balita Stunting',
                interactive: true,
    title: 'Prevalensi Balita Stunting<br />\
    <img src="styles/legend/PrevalensiBalitaStunting_1_0.png" /> Rendah (< 20%)<br />\
    <img src="styles/legend/PrevalensiBalitaStunting_1_1.png" /> Sedang (20 - 30%)<br />\
    <img src="styles/legend/PrevalensiBalitaStunting_1_2.png" /> Tinggi (>= 30%)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_PrevalensiBalitaStunting_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PrevalensiBalitaStunting_1];
lyr_PrevalensiBalitaStunting_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Wilayah': 'Wilayah', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'Provinsi': 'Provinsi', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'Stunting-2023': 'Stunting-2023', });
lyr_PrevalensiBalitaStunting_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Wilayah': '', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'Provinsi': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'Stunting-2023': 'TextEdit', });
lyr_PrevalensiBalitaStunting_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Wilayah': 'inline label - visible with data', 'ADM2_PCODE': 'hidden field', 'ADM2_REF': 'hidden field', 'ADM2ALT1EN': 'hidden field', 'ADM2ALT2EN': 'hidden field', 'Provinsi': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'Stunting-2023': 'inline label - visible with data', });
lyr_PrevalensiBalitaStunting_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});