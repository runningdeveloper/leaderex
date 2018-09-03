const puppeteer = require('puppeteer');
const _ = require('lodash');
const jsonfile = require('jsonfile')

async function run() {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();

  await page.goto('http://www.leaderex.com/sectionevents.aspx?s=65');

  let eventTypes = [];

  const events = await page.evaluate(() => {
    const eventsArray = [];
    const eventsResult = document.querySelectorAll('.divEventCategory');
    eventsResult.forEach((element) => {
      eventsArray.push({
        link: element.querySelector('a').getAttribute('href'),
        name: element.querySelector('a').querySelector('div').innerText
      })
    });

    return eventsArray;

  });

  eventTypes = events;

  let mainList = [];

  // events.forEach((aEvent) => {
  for(let i=0; i<events.length; i++){
    await page.goto('http://www.leaderex.com/' + events[i].link);

    const detail = await page.evaluate(() => {
      const eventsArray = [];
      const eventsResult = document.querySelectorAll('.diveventagendawrapper');
      eventsResult.forEach((element) => {

        const speakers = [];
        const speakersDiv = element.querySelectorAll('.diveventagendaspeakers');
        speakersDiv[0].querySelectorAll('.divSpeakerPhoto').forEach((element) => {
          // if(element.querySelector('.divSpeakerPhoto')){
            const reg = /(?:\(['"]?)(.*?)(?:['"]?\))/;
            const img = reg.exec(element.getAttribute('style'))[1];
            speakers.push({
              name: element.querySelector('div').firstChild.textContent.trim(),
              company: element.querySelector('div').querySelector('div').innerText,
              image: img
            })
          // }
        })

        eventsArray.push({
          link: window.location.href,
          type: document.querySelector('h1').innerText,
          time: element.querySelectorAll('.fontheader')[0].innerText,
          room: element.querySelectorAll('.fontheader')[1].innerText,
          title: element.querySelectorAll('.fontheader')[4].innerText,
          speakers: speakers,
        })
      });

      return eventsArray;
    });
    console.log('sub', detail);

    mainList = mainList.concat(detail);
  }

  // console.log('result', mainList);

  const all = {
    date: (new Date()).toJSON(),
    types: _.uniqWith(eventTypes, _.isEqual),
    list: _.uniqWith(mainList, _.isEqual) // getting some doubles, think its mobile stuff coming in
  }

  jsonfile.writeFile('all.json', all, function (err) {
    if(err){
      console.error(err)
    }else{
      console.log('saved');
    }
  })

  browser.close();
}

run();