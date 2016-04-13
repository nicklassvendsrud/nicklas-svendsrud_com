'use strict';

/**
 * @ngdoc function
 * @name nicklasSvendsrudComApp.controller:TechCtrl
 * @description
 * # TechCtrl
 * Controller of the nicklasSvendsrudComApp
 */
angular.module('nicklasSvendsrudComApp')
  .controller('TechCtrl', function ($scope, $rootScope) {

    $rootScope.bodyBg = 'otherBg';

    $scope.techTxt = {
      title: 'Dette kan jeg',
      intro: 'Jeg trives best med å jobbe frontend, i skjæringspunktet mellom design og utvikling, og liker best å kunne bidra i flere faser av et prosjekt fra planlegging/konsept til teknisk utførelse.',
      strengths: {
        title: 'Mine styrker',
        languageList: ['HTML(5)', 'CSS(3) (hvor jeg helst bruker SASS)', 'JavaScript'],
        likes: 'Jeg forsøker å hele tiden bli bedre på riktig semantisk HTML, og å lære meg nye rammeverk som kan bidra til mer strukturert kode og bedre arbeidsflyt.'
      },
      thisPage: {
        title: 'Jeg har bl.a jobbet med',
        text: 'jQuery, AngularJS, NodeJS & NPM, Git, Grunt, Bower, Wordpress, REST APIer, Firebase (& AngularFire), dokumentorientere databaser (MongoDB), (My)SQL, Twitter Bootstrap, GreenSock (GSAP), Yeoman (til scaffolding av prosjekter), PhaserJS m.m'
      },
      other: {
        title: 'Annen kompetanse',
        otherList: [
          'Erfaring med utarbeidelse av wireframes',
          'Mye erfaring med Adobes Creative Suite-programvare (Photoshop, Illustrator, InDesign etc).',
          'Noe erfaring med PHP, fra utvikling for Wordpress.',
          'Grunnleggende kunnskap om .NET-utvikling i C#',
          'Grunnleggende kunnskap i Java.',
          'Erfaring med smidig utviklingsmetodikk, både SCRUM og Kanban.',
          'Tilhenger av LEAN utvikling :)'
        ]
      }
    };

  });
