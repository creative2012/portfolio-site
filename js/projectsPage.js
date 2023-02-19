const pp_one = document.getElementById('pp_one');
const pp_two = document.getElementById('pp_two');
const pp_three = document.getElementById('pp_three');
const pp_four = document.getElementById('pp_four');
const pp_five = document.getElementById('pp_five');
const pp_six = document.getElementById('pp_six');
const pp_seven = document.getElementById('pp_seven');
const pp_eight = document.getElementById('pp_eight');
const pp_nine = document.getElementById('pp_nine');
const pp_ten = document.getElementById('pp_ten');
const pp_container = document.getElementById('projectsPageContainer');

const pp_screenArrayTop = [pp_one, pp_three, pp_five, pp_seven, pp_nine];
const pp_screenArrayBottom = [pp_two, pp_four, pp_six, pp_eight, pp_ten];
class ProjectsPage {
    enter() {
        pp_container.style.display = 'grid';
        
        let timer = 100;
        let timer2 = 100;
        pp_screenArrayTop.forEach((item) => {
            setTimeout(() => {

                item.style.width = "var(--s1)";
            }, timer);
            timer += 200;

        });
        pp_screenArrayBottom.forEach((item) => {
            setTimeout(() => {

                item.style.width = "var(--s1)";
            }, timer2);
            timer2 += 200;

        });
        setTimeout(() => {
            go = true;
        }, timer2 + 300);
    }
    exit() {

        let timer = 100;
        let timer2 = 100;
        pp_screenArrayTop.forEach((item) => {
            setTimeout(() => {

                item.style.width = "0";
            }, timer);
            timer += 200;

        });
        pp_screenArrayBottom.forEach((item) => {
            setTimeout(() => {

                item.style.width = "0";
            }, timer2);
            timer2 += 200;

        });
        setTimeout(() => {
            pp_container.style.display = 'none';
            
            go = true;
        }, timer2 + 300);

    }

}