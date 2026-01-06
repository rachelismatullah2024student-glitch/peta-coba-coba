var wms_layers = [];

var format_data_0 = new ol.format.GeoJSON();
var features_data_0 = format_data_0.readFeatures(json_data_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_0.addFeatures(features_data_0);
var lyr_data_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_data_0, 
                style: style_data_0,
                popuplayertitle: 'data',
                interactive: true,
                title: '<img src="styles/legend/data_0.png" /> data'
            });
var format_koordinat_1 = new ol.format.GeoJSON();
var features_koordinat_1 = format_koordinat_1.readFeatures(json_koordinat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koordinat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koordinat_1.addFeatures(features_koordinat_1);
var lyr_koordinat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koordinat_1, 
                style: style_koordinat_1,
                popuplayertitle: 'koordinat',
                interactive: true,
                title: '<img src="styles/legend/koordinat_1.png" /> koordinat'
            });
var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_2.addFeatures(features_jalan_2);
var lyr_jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_2.png" /> jalan'
            });
var format_Aggregated_3 = new ol.format.GeoJSON();
var features_Aggregated_3 = format_Aggregated_3.readFeatures(json_Aggregated_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aggregated_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aggregated_3.addFeatures(features_Aggregated_3);
var lyr_Aggregated_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aggregated_3, 
                style: style_Aggregated_3,
                popuplayertitle: 'Aggregated',
                interactive: true,
                title: '<img src="styles/legend/Aggregated_3.png" /> Aggregated'
            });
var format_Indo_Kab_Kot_4 = new ol.format.GeoJSON();
var features_Indo_Kab_Kot_4 = format_Indo_Kab_Kot_4.readFeatures(json_Indo_Kab_Kot_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indo_Kab_Kot_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indo_Kab_Kot_4.addFeatures(features_Indo_Kab_Kot_4);
var lyr_Indo_Kab_Kot_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indo_Kab_Kot_4, 
                style: style_Indo_Kab_Kot_4,
                popuplayertitle: 'Indo_Kab_Kot',
                interactive: true,
                title: '<img src="styles/legend/Indo_Kab_Kot_4.png" /> Indo_Kab_Kot'
            });

lyr_data_0.setVisible(true);lyr_koordinat_1.setVisible(true);lyr_jalan_2.setVisible(true);lyr_Aggregated_3.setVisible(true);lyr_Indo_Kab_Kot_4.setVisible(true);
var layersList = [lyr_data_0,lyr_koordinat_1,lyr_jalan_2,lyr_Aggregated_3,lyr_Indo_Kab_Kot_4];
lyr_data_0.set('fieldAliases', {'NO': 'NO', 'EAST (E)': 'EAST (E)', 'SOUTH (S)': 'SOUTH (S)', 'NAMA TEMPAT': 'NAMA TEMPAT', 'KET': 'KET', });
lyr_koordinat_1.set('fieldAliases', {'NO': 'NO', 'EAST (E)': 'EAST (E)', 'SOUTH (S)': 'SOUTH (S)', 'NAMA TEMPA': 'NAMA TEMPA', 'KET': 'KET', 'foto': 'foto', });
lyr_jalan_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Aggregated_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KD_PROV': 'KD_PROV', 'KD_KABKOTA': 'KD_KABKOTA', 'KD_KEC': 'KD_KEC', 'KD_DESA': 'KD_DESA', 'NM_PROV': 'NM_PROV', 'NM_KABKOTA': 'NM_KABKOTA', 'NM_KEC': 'NM_KEC', 'NM_DESA': 'NM_DESA', 'LUAS_DESA': 'LUAS_DESA', });
lyr_Indo_Kab_Kot_4.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', });
lyr_data_0.set('fieldImages', {'NO': 'Range', 'EAST (E)': 'TextEdit', 'SOUTH (S)': 'TextEdit', 'NAMA TEMPAT': 'TextEdit', 'KET': 'TextEdit', });
lyr_koordinat_1.set('fieldImages', {'NO': 'TextEdit', 'EAST (E)': 'TextEdit', 'SOUTH (S)': 'TextEdit', 'NAMA TEMPA': 'TextEdit', 'KET': 'TextEdit', 'foto': 'ExternalResource', });
lyr_jalan_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Aggregated_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'KD_PROV': 'TextEdit', 'KD_KABKOTA': 'TextEdit', 'KD_KEC': 'TextEdit', 'KD_DESA': 'TextEdit', 'NM_PROV': 'TextEdit', 'NM_KABKOTA': 'TextEdit', 'NM_KEC': 'TextEdit', 'NM_DESA': 'TextEdit', 'LUAS_DESA': 'TextEdit', });
lyr_Indo_Kab_Kot_4.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', });
lyr_data_0.set('fieldLabels', {'NO': 'no label', 'EAST (E)': 'no label', 'SOUTH (S)': 'no label', 'NAMA TEMPAT': 'no label', 'KET': 'no label', });
lyr_koordinat_1.set('fieldLabels', {'NO': 'no label', 'EAST (E)': 'no label', 'SOUTH (S)': 'no label', 'NAMA TEMPA': 'no label', 'KET': 'no label', 'foto': 'no label', });
lyr_jalan_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Aggregated_3.set('fieldLabels', {'OBJECTID': 'no label', 'KD_PROV': 'no label', 'KD_KABKOTA': 'no label', 'KD_KEC': 'no label', 'KD_DESA': 'no label', 'NM_PROV': 'no label', 'NM_KABKOTA': 'no label', 'NM_KEC': 'no label', 'NM_DESA': 'no label', 'LUAS_DESA': 'no label', });
lyr_Indo_Kab_Kot_4.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', });
lyr_Indo_Kab_Kot_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});