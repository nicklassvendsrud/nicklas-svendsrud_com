'use strict';

/**
 * @ngdoc function
 * @name nicklasSvendsrudComApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the nicklasSvendsrudComApp
 */
angular.module('nicklasSvendsrudComApp')
  .controller('CvCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.bodyBg = 'otherBg';

    $scope.cvTxt = {
      title: 'CV',
      work: [
        {
          date: 'Februar 2015 - d.d',
          title: 'Frontend-utvikler',
          place: 'DDB Oslo AS',
          description: 'Utvikling av kampanjesider, digitale ads og mindre webapps for kunder. Fagansvarlig for teknologi i designavdelingen.'
        },
        {
          date: 'Juni 2014 - August 2014',
          title: 'Sommervikariat Frontend-webutvikler/designer',
          place: 'Intelecom Group AS',
          description: 'Prosjekt hvor jeg hadde ansvar for formgiving og brukeropplevelse/interaksjonsdesign, i tillegg til frontend-utvikling. Jobbet med AngularJS opp mot et REST Web API skrevet av firmaets backend-utviklere. <a href="assets/attest_intelecom.pdf">Les attest her...</a>'
        },
        {
          date: 'Sept. 2012 - Jan. 2015',
          title: 'Markedsmedarbeider deltid',
          place: 'Esaias Solberg AS',
          description: 'Utarbeidelse av annonser, plakater o.l, i tillegg til noe bannerproduksjon for web - produktfoto - e-postmarkedsføring.'
        },
        {
          date: 'Sept. 2006 - Aug. 2012',
          title: 'Grafisk designer og inhouse-fotograf',
          place: 'Bjørklund Norge AS',
          description: 'Utarbeidelse av annonser, plakater, brosjyrer og kataloger til trykk - produktfoto - utvikle produktvisninger til butikkskjermer med Adobe After Effects.'
        },
        {
          date: '2005 - sept. 2006',
          title: 'Fotograf (presse og reklame)',
          place: 'Frilans',
          description: 'Jobbet bl.a for Romerikes Blad, Dagbladet og Fædrelandsvennen.'
        }
      ],
      education: [
        {
          date: 'Aug. 2012 - juni 2015',
          title: 'Bachelor i IT med fordypning i Digital Markedsføring',
          place: 'NITH/Westerdals Oslo ACT'
        },
        {
          date: '2004 - 2006',
          title: 'Grafisk design, foto og fotojournalistikk',
          place: 'Arbeiderbevegelsens Folkehøgskole Ringsaker'
        },
        {
          date: '2001 - 2004',
          title: 'Generell studiekompetanse - Formgivingsfag (Tegning, form & farge)',
          place: 'Bjørkelangen Videregående Skole'
        }
      ]
    };

  });
