import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'


const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="cv">

      <div class="space-y-12">
        <div id="bio" class="text-grey-500 font-poppins">
          <h3 class="font-poppins text-2xl text-gray-500 py-6">bio</h3>
          <p>Lorenzo Antei è nato a La Spezia nel 1994. Ha studiato Economia e Commercio all'Università di Pisa. Durante il periodo universitario, si è appassionato alla fotografia grazie al contributo di RadioEco (La radio degli studenti dell’Università di Pisa) dove ha iniziato a realizzare i primi reportage concertistici. Con l’ingresso all'’Accademia delle Belle Arti di Carrara (<a href="https://www.accademiacarrara.it/it/scuole/nuove-tecnologie-dellarte">Nuove tecnologie dell'arte</a>), ha iniziato ad approfondire le infinite potenzialità e declinazioni del medium digitale. Al di fuori dell’ambiente accademico si occupa di riprese audio/video e montaggio come freelance nel settore teatrale, musicale e cerimoniale. </p>
        </div>
  
        <div id="exps">
          <h3 className="font-poppins text-2xl text-gray-500">ultime esperienze</h3>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">matrimonio.com – scansione 3D location (da luglio ‘21 a ottobre ‘21)</h3>
            <p>Ho realizzato una serie di tour virtuali (scansioni 3D e foto sferiche a 360º) delle location matrimoniali con Matterport Pro2 per matrimonio.com </p>
          </div>
          
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Carnet Erotico - Francesca Zaccaria (luglio ‘21)</h3>
          <p>Ho prodotto del materiale fotografico ed audiovisivo per la Danzatrice Francesca Zaccaria (ALDES | SPAM!). <a class="hover:underline" href="https://www.aldesweb.org/produzioni/carnet-erotico/">Link al progetto</a></p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Tempi Moderni – Roberto Castello (ALDES | SPAM!) (luglio ‘21)</h3>
              <p>“TEMPI MODERNI - La commedia rivista: II edizione” è una rassegna di teatro, musica e danza presentata in sedici corti del Comune di Capannori ed ideata da Roberto Castello. Per l’evento ho realizzato le riprese A/V e prodotto un documentario visionabile <a class="hover:underline" href="https://www.youtube.com/watch?v=PIXy9szKSQE">QUI</a>.</p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Raquel Torralba – Fotografia matrimoniale (da maggio ‘21 a settembre '21')</h3>
            <p>Studio fotografico specializzato nella realizzazione di servizi foto e video per matrimoni in stile reportage. Produzione di materiale fotografico e audiovisivo. Raquel Torralba Fotografia (Via Cairoli 6/8, 16124 Genova) - raqueltorralba.com</p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Giovanni Antonio Cybei e il suo tempo – web design (aprile ‘21)</h3>
            <p>La mostra “Giovanni Antonio Cybei e il suo tempo. Insigne statuario per le corti europee e Primario Direttore dell’Accademia di Belle Arti di Carrara” celebra il primo direttore dell’Accademia, lo scultore carrarese Giovanni Antonio Cybei (1706-1784), che operò per le più illustri case regnanti d’Italia e d’Europa. È promossa e realizzata dall’Accademia di Belle Arti di Carrara ed ideata e curata dal Prof. Gerardo de Simone e da Luciano Massari, Direttore dell’Accademia di Belle Arti di Carrara. Per la mostra, ho ideato e realizzato il design del sito web dell’evento.</p>
            <a class="hover:underline" href="https://www.accademiacarrara.it/img/mcybei/index.html">Link al sito della mostra</a>
          </div>
          
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Dés'art (marzo ‘21)</h3>
            <p>Dance Academy. Ho prodotto materiale A/V, fotografico e gestito delle live streaming.</p>
          </div>
          
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Giovanni Antonio Cybei e il suo tempo – web design (aprile ‘21)</h3>
            <p>Ispira è networking e sperimentazione, è il punto d’incontro di diverse visioni artistiche e ricerche di contenuti. Ho realizzato delle riprese A/V per la produzione di una videoclip e gli scatti fotografici del backstage. </p>
            <a class="hover:underline" href="https://www.youtube.com/watch?v=hqEMg-uHIFo">videoclip Ginkgo | Va bene così Prod. Chxse Bank | Ispira</a>
          </div>
          
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Foto Bouquet - fotografia matrimoniale (da settembre '20 a settembre '21)</h3>
            <p>Fotobouquet è uno studio fotografico specializzato nella realizzazione di servizi foto e video per matrimoni in stile reportage. Produzione di materiale fotografico e audiovisivo.
              Studio Fotografico Foto Bouquet (Via Montebello, 7 - 40124 Bologna) - <a class="hover:underline" href="https://www.foto-bouquet.com/">foto-bouquet.com</a></p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Baranzate in Opera (gennaio ‘20)</h3>
            <p>Un progetto per Baranzate e la sua comunità: un’immersione totale nel melodramma e nella musica lirica. Ho prodotto le registrazioni A/V degli eventi.</p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Virtuitaly (da marzo ‘19 a giugno ‘19)</h3>
            <p>VirtuItaly è una startup company, nata come spinoff di Centrica con lo scopo di valorizzare il patrimonio culturale e creativo italiano e creare mostre virtuali interattive e immersive: eventi culturali di grande impatto emotivo e valore educativo e di intrattenimento. Per Virtuitaly ho realizzato uno spot ed altri audiovisivi.
              Virtuitaly S.r.l. (Piazza della Madonna della Neve, 5 – 50122 Firenze) – <a class="hover:underline"href="https://www.virtuitaly.com/">virtuitaly.com</a> </p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Centrica (da marzo ‘19 a giugno ‘19)</h3>
            <p>Centrica S.r.l. è specializzata nella progettazione, nello sviluppo e nella commercializzazione di soluzioni digitali nel campo di: beni culturali, turismo e forme di espressione della creatività. Per Centrica ho prodotto diversi audiovisivi e montaggi fotografici. Attualmente in rapporto per prestazioni occasionali.
              Centrica S.r.l. (Piazza della Madonna della Neve, 5 – 50122 Firenze) –  <a class="hover:underline"href="https://www.centrica.it/">centrica.it</a> </p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Nessiah Festival (da novembre ‘18)</h3>
            <p>Il Festival Nessiah è un festival nato per esplorare e raccontare la cultura ebraica in tutte le sue sfaccettature, mostrando la ricchezza della sua storia millenaria e la varietà delle tradizioni di luoghi diversi. Per il festival ho realizzato i reportage degli eventi, le riprese video e ho realizzato lo spot delle edizioni 2018 e 2019 e altri filmati promozionali. festivalnessiah.it 
              <a class="hover:underline"href="https://www.festivalnessiah.it/">festivalnessiah.it</a></p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Più o meno Pop (da marzo ‘18)</h3>
            <p>Più o Meno POP è una Webzine che si occupa di eventi musicali. Per Più o Meno POP realizzo photostories di concerti e spettacoli, aiuto nella cura della pagina facebook della redazione e revisione degli articoli.
            <a class="hover:underline"href="http://www.piuomenopop.it/?s=lorenzo+antei">QUI</a> i miei reportage.</p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Radioeco.it (da settembre ‘17 a settembre ‘19)</h3>
            <p>radioeco.it è la radio degli studenti dell’Università di Pisa. Per Radioeco ho realizzato diversi reportage fotografici dei concerti, spettacoli ed eventi di varia natura, videointerviste e materiale promozionale multimediale; ho svolto anche attività di regia e di supporto tecnico ai programmi radiofonici.
              Radioeco Studio (Via Curtatone e Montanara, 4 – 56126 Pisa) – <a class="hover:underline"href="http://www.radio-eco.it">radio-eco.it</a></p>
          </div>
        
        </div>
  
        <div id="exps">
          <h3 className="font-poppins text-2xl text-gray-500 py-6">Istruzione</h3>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Nuove tecnologie dell’arte (da settembre ‘19)</h3>
            <p>Accademia di Belle Arti di Carrara (Via Roma, 1 - 54033 Carrara) - <a class="hover:underline" href="https://www.accademiacarrara.it">accademiacarrara.it</a>.</p>
          </div>
          
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Progetto Museolab (da novembre ‘18 a giugno ‘19)</h3>
          <p>“Tecnico della realizzazione di progetti fotografici, audiovisuali, grafico editoriali e creazione di racconti per immagini”. TD Group Italia (Via Fiume Bianco, 56 - 00144 Roma) - <a class="hover:underline" href="https://www.tdgroupitalia.it/">tdgroupitalia.it</a></p>
          </div>
  
          <div class="py-6">
            <h3 className="font-poppins text-xl text-gray-500 py-3">Economia e commercio (da settembre '14 a giugno '18</h3>
          <p>Ho conseguito 19 esami.</p>
          </div>
  
        </div>
  
        <div id="software">
          <h3 className="font-poppins text-2xl text-gray-500 py-6">Software di produzione digitale</h3>
  
          <div class="py-6">
            <ul class="space-y-3">
              <li>HTML / CSS / Javascript;</li>
              <li>
                <ul>Adobe:
                  <div  class="pl-3">
                    <li> Premiere PRO;</li>
                    <li> After Effects;</li>
                    <li> Photoshop;</li>
                    <li> Illustrator;</li>
                    <li> Audition; </li>
                  </div>
                </ul>
              </li>
              <li>Blackmagic Davinci Resolve;</li>
              <li>Phase One Capture One;</li>
              <li>Facebook Spark;</li>
              <li>Arduino / Processing (C++); </li>
              <li>Ableton Live;</li>
              <li>Maxon Cinema 4D;</li>
              <li>OBS;</li>
            </ul>
          </div>
            
        </div>
  
        <div id="tools">
          <h3 className="font-poppins text-2xl text-gray-500 py-6">Attrezzzatura principale</h3>
  
          <div class="py-6">
            <ul class="space-y-3">
              <li>Fujifilm X-T4;</li>
              <li>Fujifilm X-T3;</li>
              <li>Fujinon 56mm f1.2;</li>
              <li>Fujinon 18-55 f2.8-4 OIS;</li>
              <li>Fujinon 50-140 f2.8 OIS;</li>
              <li>Fujinon 16mm f1.4;</li>
              <li>Atomos Ninja V;</li>
              <li>Tascam DR70D;</li>
              <li>Zoom F1;</li>
              <li>Zoom XYH-6;</li>
              <li>Zoom SSH-6;</li>
              <li>Godox V1</li>
            </ul>
          </div>
          
         
  
        </div>
      </div>

      
      <div className="text-gray-400 hover:underline  hover:text-black hover:ease-in-out duration-1000"><Link to={`/`}>goTo home</Link></div> 

      
    </Layout>
    
  )
}


export default IndexPage
