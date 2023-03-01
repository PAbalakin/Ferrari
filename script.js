

let comingUpContent = document.getElementById('comingUpContent');
let eventsWeekContent = document.getElementById('eventsWeekContent');
let pastEventsContent = document.getElementById('pastEventsContent');


let comingUpTab = document.getElementById('comingUpTab');
let eventsWeekTab = document.getElementById('eventsWeekTab');
let pastEventsTab = document.getElementById('pastEventsTab');

	function setActive(tab, content) {
		eventsWeekContent.style.display = 'none';
		comingUpContent.style.display = 'none';
		pastEventsContent.style.display = 'none';
		
		eventsWeekTab.classList.remove('highlight');
		comingUpTab.classList.remove('highlight');
		pastEventsTab.classList.remove('highlight');


		content.style.display = "block"

        tab.classList.add('highlight');
	}

	setActive( eventsWeekTab, eventsWeekContent);
	function showEventsWeek () {
		setActive(eventsWeekTab, eventsWeekContent);
	}
	function showComingUp () {
		setActive(comingUpTab, comingUpContent);
	}
	function showPastEvents () {
		setActive(pastEventsTab, pastEventsContent);
	}