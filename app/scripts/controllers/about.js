'use strict';

/**
 * @ngdoc function
 * @name nicklasSvendsrudComApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nicklasSvendsrudComApp
 */
angular.module('nicklasSvendsrudComApp')
  .controller('AboutCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.bodyBg = 'otherBg';

    $scope.aboutMe = {
      title: 'Om meg',
      intro: 'Hei! <br><br>Jeg er Nicklas Svendsrud - kreativ frontend-utvikler.',
      text1: 'Jeg er 30 &aring;r og kommer opprinnelig fra <a href="http://no.wikipedia.org/wiki/Fetsund" target="_blank">Fetsund</a> i Akershus, men bor p&aring; Munkebekken ved Ellingsrud i Oslo. Jeg er gift og har en datter p&aring; fire &aring;r og en s&oslash;nn som er snart ett &aring;r gammel.<br><br>Fra 2006 til 2012 jobbet jeg som grafisk designer og inhouse-fotograf i markedsavdelingen til <a href="http://www.bjorklund.no" target="_blank">Bj&oslash;rklund Norge AS</a> (klokke- og smykkekjeden). Jeg &oslash;nsket &aring; utvikle min kompetanse videre og begynte som fulltidsstudent ved NITH (Norges Informasjonsteknologiske H&oslash;gskole) h&oslash;sten 2012, som n&aring; har blitt teknologisk avdeling ved Westerdals Oslo School of Arts, Communication & Technology.<br><br>Utdannelsen min baserer seg p&aring; f&oslash;lgende fag:',
      courses1: ['Programmering 1 (Java)',
                'Databaser',
                'Digital teknologi',
                'Kreativt webprosjekt (gruppearbeid)',
                'Programmering 2 (Java)',
                'Informasjonssikkerhet',
                'Digital kultur',
                'Iterativt webprosjekt (gruppearbeid)',
                'Interaksjonsdesign',
                'Webutvikling 1',
                'Markedsføring'
      ],
      courses2: ['Prosjekt Software engineering (gruppearbeid - SCRUM)',
                'Webutvikling 2',
                'Digital markedsføring',
                'Sosial media markedsføring',
                'Web2.0/Ajax (MVC webutvikling)',
                'Content Management Systems',
                'Forbrukerpsykologi',
                'Entrepenørskap',
                'Undersøkelsesmetoder',
                'Effektevaluering: teknikker og verktøy',
                'Hovedprosjekt (Bacheloroppgave)'
      ],
      text2: 'I begynnelsen av februar 2015 begynte jeg i jobben som frontend-utvikler i <a href="http://ddb.no" target="_blank">DDB Oslo</a>, som jeg kombinerte med studier frem til jeg var ferdig med Bachelorgraden i IT med spesialisering i digital markedsføring, i juni samme &aring;r.',
      text3: 'Jeg er alltid ute etter å utvikle meg faglig, og vil jobbe mye for &aring; bli “best i klassen”.<br><br>Jeg er en omgjengelig person med godt hum&oslash;r og som er lett &aring; samarbeide med. Alltid lojal og pliktoppfyllende. Jobber godt selvstending og/eller i team.<br><br>Fritiden min g&aring;r for det meste med til familien, men jeg er glad i &aring; sykle og pr&oslash;ver &aring; holde meg i form p&aring; den m&aring;ten. Jeg er ogs&aring; veldig opptatt av musikk og har tidligere spilt i flere band.'
    };

  });
