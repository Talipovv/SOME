const body = document.body
const header = document.createElement('header')
const logo_block = document.createElement('div')
logo_block.classList.add('logo_block')
const img = document.createElement('img')
img.src = './img/Logo.png'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'
const nav = document.createElement('nav')
const ul = document.createElement('ul')
ul.classList.add('menu')

const menu_item = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']
for (let i = 0; i < menu_item.length; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.classList.add('menu_item')
    a.textContent = menu_item[i]
    li.append(a)
    ul.append(li)

}

const main = document.createElement('main')
const section = document.createElement('section')
section.classList.add('question_block')


for (let i = 0; i < 3; i++) {
    const div = document.createElement('div')
    div.classList.add('question_img')
    const img = document.createElement('img')
    img.src = './img/question.png'
    const p = document.createElement('p')
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'
    div.append(img, p)
    section.append(div)
}

const part2 = document.createElement('section')
part2.classList.add('part2')
const part2__title = document.createElement('p')
part2__title.classList.add('part2__title')
part2__title.textContent = 'О приложении'
const video = document.createElement('div')
video.classList.add('video')
const video_back = document.createElement('img')
video_back.classList.add('video_back')
video_back.src = './img/rawpixel-559744-unsplash.png'
const play = document.createElement('img')
play.classList.add('play')
play.src = './img/play-button.png'

const section_quest = document.createElement('section')
section_quest.classList.add('section_quest')
const block_imgs = document.createElement('div')
block_imgs.classList.add('block_imgs')
for (let i = 0; i < 5; i++) {
    const questionFive = document.createElement('img')
    questionFive.src = './img/questionsFive.png'
    block_imgs.append(questionFive)
    section_quest.append(block_imgs)
}

const project = document.createElement('section')
project.classList.add('project')
const about_project = document.createElement('p')
about_project.classList.add('about_project')
about_project.textContent = 'О проекте'
const text_project = document.createElement('div')
text_project.classList.add('text_project')
text_project.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6
недель. Опытные
бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их
бизнеса: от разработки идеи до ее реализации.`
project.append(about_project, text_project)


const down = document.createElement('section')
down.classList.add('down')
const download = document.createElement('p')
download.classList.add('download')
download.textContent = 'Скачать'
const links_img = document.createElement('div')
links_img.classList.add('links_img')
const android = document.createElement('img')
android.src = './img/android.png'
const qr = document.createElement('img')
qr.src = './img/QR-code.png'
links_img.append(android, qr)
down.append(download, links_img)


const text_project2 = document.createElement('div')
text_project2.classList.add('text_project')
text_project2.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6
недель. Опытные
бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их
бизнеса: от разработки идеи до ее реализации.`
down.append(text_project2)



const footer = document.createElement('footer')
footer.classList.add('footer')
const some = document.createElement('p')
some.classList.add('SOME')
some.textContent = 'SOME'
const links_img2 = document.createElement('div')
links_img2.classList.add('links_img2')
const vk = document.createElement('img')
vk.src = './img/vk.png'
const instagram = document.createElement('img')
instagram.src = './img/instagram.png'
const facebook = document.createElement('img')
facebook.src = './img/facebook.png'
links_img2.append(vk, instagram, facebook)










video.append(video_back, play)
part2.append(part2__title, video)
nav.append(ul)
logo_block.append(img, h1)
header.append(logo_block, nav)
main.append(section, part2, section_quest, project, down)
body.append(header, main, footer)
footer.append(some, links_img2)



























