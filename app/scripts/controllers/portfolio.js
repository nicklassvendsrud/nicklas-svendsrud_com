'use strict';

/**
 * @ngdoc function
 * @name nicklasSvendsrudComApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the nicklasSvendsrudComApp
 */
angular.module('nicklasSvendsrudComApp')
  .controller('PortfolioCtrl', function ($scope, $rootScope) {

    $rootScope.bodyBg = 'otherBg';

    $scope.portfolio = {
      title: 'Portefølje',
      entry: [
        {
          id: 'codan',
          entryTitle: 'Kampanjeside Codan Forsikring',
          type: 'Webside',
          link: 'www.codanforsikring.no/kampanje/pages/vinn-tur-for-to_2016-01-1.aspx',
          thumbUrl: 'images/thumbs/thumb_codan.png',
          imgUrl: 'images/mockups/mockup_codan.png',
          description: 'Kampanjeside for Codan Forsikring. Utviklet, men ikke designet av meg.'
        },
        {
          id: 'komplett',
          entryTitle: 'Komplett Bank bannerspill',
          type: 'Spill',
          link: 'nicklas-svendsrud.com/SITES/komplettbank/index.html',
          thumbUrl: 'images/thumbs/thumb_komplett.png',
          imgUrl: 'images/mockups/mockup_komplett.png',
          description: 'En "proof-of-concept" på et HTML5-spill i en digital ad, hvor målet var å presentere enn annerledes bannerløsning til kunde. OBS! Dette er ikke en ferdigutviklet versjon, men kun en test på de ulike mulighetene man har i et HTML5-banner. Benytter seg av lazy/polite loading for å laste inn tunge ressurser etter initial load.'
        },
        {
          id: 'stiniusviking',
          entryTitle: 'Stinius Viking Racing',
          type: 'Webside Wordpress',
          link: 'www.stiniusviking.com',
          thumbUrl: 'images/thumbs/thumb_stiniusviking.png',
          imgUrl: 'images/mockups/mockup_stiniusviking.png',
          description: 'Webside laget for Stinius Viking Ødegård (17), en av Norges største roadracingprofiler. Bygget på Wordpress, hvor jeg har designet og utviklet eget theme fra bunnen av, i tillegg til oppsett av løsningen med nødvendige plugins og en del egne PHP-modifikasjoner. Responsiv løsning, som tar i bruk HTML5-video som bakgrunn på laptop-/desktop-versjonen.'
        },
        {
          id: 'nextround',
          entryTitle: 'Next Rounds On Who?!',
          type: 'Web-app',
          link: 'nicklas-svendsrud.com/SITES/NextRoundsOnWho/index.html',
          thumbUrl: 'images/thumbs/thumb_nextround.png',
          imgUrl: 'images/mockups/mockup_nextround.png',
          description: 'Et lite hobbyprosjekt jeg har hatt. Responsiv web-applikasjon hvor venner kan la applikasjonen bestemme hvem som “tar regninga” (etter idé fra <a href="https://www.linkedin.com/in/fredriktveit">Fredrik Tveit</a>). Legg inn navnene på de som skal være med på leken og appen trekker et tilfeldig navn i ekte “slot-machine”-stil.'
        },
        {
          id: 'blodbanken',
          entryTitle: '- Vi vet du har det i deg | Blodbanken',
          type: 'Webside',
          link: 'nicklas-svendsrud.com/SITES/blodbanken/vivetduhardetideg.html',
          thumbUrl: 'images/thumbs/thumb_blodbanken.png',
          imgUrl: 'images/mockups/mockup_blodbanken.png',
          description: 'Fagoppgave på NITH, i faget “Digital Markedsføring”. Case kom fra Patchwork Norge (content marketing-byrå), hvor jeg og tre andre medstudenter skulle designe og utvikle en fungerende kampanjeside (front-end-prototype), i tillegg til strategi, promoteringsplan etc. Kampanjens mål er å skaffe leads til Blodbanken i Oslo, som igjen vil føre til nye blodgivere. Jeg har stått for design og utvikling av kampanjesiden.'
        },
        {
          id: 'instavizor',
          entryTitle: 'Instavizor',
          type: 'Webside',
          link: 'nicklas-svendsrud.com/SITES/instavizor/index.html',
          thumbUrl: 'images/thumbs/thumb_instavizor.png',
          imgUrl: 'images/mockups/mockup_instavizor.png',
          description: 'En enkel nettside jeg laget for å kunne overvåke hashtags på Instagram. Brukte denne for å lære meg å hente ut bilder fra en Instagram-feed.'
        },
        {
          id: 'okonomilappen',
          entryTitle: 'Økonomilappen',
          type: 'Webside',
          link: 'nicklas-svendsrud.com/SITES/okonomilappen/okonomilappen.html',
          thumbUrl: 'images/thumbs/thumb_okonomilappen.png',
          imgUrl: 'images/mockups/mockup_okonomilappen.png',
          description: 'Innleveringsoppgave på NITH i faget Webutvikling 2. Case fra Finans Norge og Forbrukerombudet, som i samarbeid har laget “Økonomilappen”, for unge voksne mellom 18-25 år. De ønsket forslag til ny løsning på sin online-test, hvor brukerne kan sjekke sin kunnskap om personlig økonomi. Dette var også en konkurranse hvor Finans Norge skulle velge ut det bidraget de synes var best. Vi var ca 60 elever i dette faget som leverte, og min løsning ble kåret til vinneren. Mitt forslag er en “mobile first responsiv løsning”, men som også fungerer på desktop.'
        },
        {
          id: 'txt',
          entryTitle: 'tXt - mobil-app',
          type: 'UI-design',
          link: 'nicklas-svendsrud.com/SITES/txtApp/index.html',
          thumbUrl: 'images/thumbs/thumb_txt.png',
          imgUrl: 'images/mockups/mockup_txt.png',
          description: 'Oppgave i faget “Forbrukerpsykologi” hvor vi skulle utvikle konsept og UI-design for en biblioteks-app for ungdom.'
        }
      ]
    };

  });
