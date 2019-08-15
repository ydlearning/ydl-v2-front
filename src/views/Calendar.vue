<template lang="pug">
v-layout(align-center justify-center)
		v-card(flat color="transparent" min-width="90%")
			v-container
				v-flex
					h3.text-center.display-2.text-center.font-weight-regular Calendar
				v-row.fill-height
					v-col
						v-sheet(height="64")
							v-toolbar(flat)
								v-btn.mr-4(outlined="" @click="setToday")
									| Today
								v-btn(fab="" text="" small="" @click="prev")
									v-icon(small="") mdi-chevron-left
								v-btn(fab="" text="" small="" @click="next")
									v-icon(small="") mdi-chevron-right
								v-toolbar-title {{ title }}
								v-spacer
								v-menu(bottom="" right="")
									template(v-slot:activator="{ on }")
										v-btn(outlined="" v-on="on")
											span {{ typeToLabel[type] }}
											v-icon(right="") mdi-menu-down
									v-list
										v-list-item(@click="type = 'day'")
											v-list-item-title Day
										v-list-item(@click="type = 'week'")
											v-list-item-title Week
										v-list-item(@click="type = 'month'")
											v-list-item-title Month
										v-list-item(@click="type = '4day'")
											v-list-item-title 4 days
						v-sheet(height="600")
							v-calendar(ref="calendar" v-model="focus" color="primary" :events="events" :event-color="getEventColor" :event-margin-bottom="3" :now="today" :type="type" @click:event="showEvent" @click:more="viewDay" @click:date="viewDay" @change="updateRange")
							v-menu(v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" full-width="" offset-x="")
								v-card(color="grey lighten-4" min-width="350px" flat="")
									v-toolbar(:color="selectedEvent.color" dark="")
										v-btn(icon="")
											v-icon mdi-pencil
										v-toolbar-title(v-html="selectedEvent.name")
										v-spacer
										v-btn(icon="")
											v-icon mdi-heart
										v-btn(icon="")
											v-icon mdi-dots-vertical
									v-card-text
										span(v-html="selectedEvent.details")
									v-card-actions
										v-btn(text="" color="secondary" @click="selectedOpen = false")
											| Cancel

</template>

<script>
export default {
    data: () => ({
        today: "2019-01-08",
        focus: "2019-01-08",
        type: "month",
        typeToLabel: {
            month: "Month",
            week: "Week",
            day: "Day",
            "4day": "4 Days"
        },
        start: null,
        end: null,
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: []
    }),
    computed: {
        title() {
            const { start, end } = this;
            if (!start || !end) {
                return "";
            }

            const startMonth = this.monthFormatter(start);
            const endMonth = this.monthFormatter(end);
            const suffixMonth = startMonth === endMonth ? "" : endMonth;

            const startYear = start.year;
            const endYear = end.year;
            const suffixYear = startYear === endYear ? "" : endYear;

            const startDay = start.day + this.nth(start.day);
            const endDay = end.day + this.nth(end.day);

            switch (this.type) {
                case "month":
                    return `${startMonth} ${startYear}`;
                case "week":
                case "4day":
                    return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
                case "day":
                    return `${startMonth} ${startDay} ${startYear}`;
            }
            return "";
        },
        monthFormatter() {
            return this.$refs.calendar.getFormatter({
                timeZone: "UTC",
                month: "long"
            });
        }
    },
    methods: {
        viewDay({ date }) {
            this.focus = date;
            this.type = "day";
        },
        getEventColor(event) {
            return event.color;
        },
        setToday() {
            this.focus = this.today;
        },
        prev() {
            this.$refs.calendar.prev();
        },
        next() {
            this.$refs.calendar.next();
        },
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event;
                this.selectedElement = nativeEvent.target;
                setTimeout(() => (this.selectedOpen = true), 10);
            };

            if (this.selectedOpen) {
                this.selectedOpen = false;
                setTimeout(open, 10);
            } else {
                open();
            }

            nativeEvent.stopPropagation();
        },
        updateRange({ start, end }) {
            // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
            this.start = start;
            this.end = end;
        },
        nth(d) {
            return d > 3 && d < 21
                ? "th"
                : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
        }
    }
};
</script>

<style lang="sass"></style>
