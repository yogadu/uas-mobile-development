var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Pernikahan_Perceraian_2022_0 = new ol.format.GeoJSON();
var features_Pernikahan_Perceraian_2022_0 = format_Pernikahan_Perceraian_2022_0.readFeatures(json_Pernikahan_Perceraian_2022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pernikahan_Perceraian_2022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pernikahan_Perceraian_2022_0.addFeatures(features_Pernikahan_Perceraian_2022_0);var lyr_Pernikahan_Perceraian_2022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pernikahan_Perceraian_2022_0, 
                style: style_Pernikahan_Perceraian_2022_0,
    title: 'Pernikahan_Perceraian_2022<br />\
    <img src="styles/legend/Pernikahan_Perceraian_2022_0_0.png" /> Sedikit Sekali<br />\
    <img src="styles/legend/Pernikahan_Perceraian_2022_0_1.png" /> Sedikit<br />\
    <img src="styles/legend/Pernikahan_Perceraian_2022_0_2.png" /> Banyak<br />\
    <img src="styles/legend/Pernikahan_Perceraian_2022_0_3.png" /> Banyak Sekali<br />'
        });

lyr_Pernikahan_Perceraian_2022_0.setVisible(true);
var layersList = [baseLayer,lyr_Pernikahan_Perceraian_2022_0];
lyr_Pernikahan_Perceraian_2022_0.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'Nikah': 'Nikah', 'Cerai': 'Cerai', });
lyr_Pernikahan_Perceraian_2022_0.set('fieldImages', {'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'Nikah': 'TextEdit', 'Cerai': 'TextEdit', });
lyr_Pernikahan_Perceraian_2022_0.set('fieldLabels', {'Kabupaten': 'header label', 'Provinsi': 'no label', 'Nikah': 'inline label', 'Cerai': 'inline label', });
lyr_Pernikahan_Perceraian_2022_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});