<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// In a real app, the calendar data would likely be dynamic
const calendarDays = [
  { date: null }, { date: 1 }, { date: 2 }, { date: 3 }, { date: 4 }, { date: 5 }, { date: 6 },
  { date: 7, event: true }, { date: 8 }, { date: 9 }, { date: 10 }, { date: 11, event: true }, { date: 12 }, { date: 13 },
  { date: 14 }, { date: 15 }, { date: 16, event: true }, { date: 17 }, { date: 18 }, { date: 19 }, { date: 20 },
  { date: 21 }, { date: 22 }, { date: 23 }, { date: 24, event: true }, { date: 25 }, { date: 26 }, { date: 27 },
  { date: 28 }, { date: 29 }, { date: 30 }, { date: 31 }, { date: null }, { date: null }, { date: null },
];

const calendarRows = [];
for (let i = 0; i < calendarDays.length; i += 7) {
    calendarRows.push(calendarDays.slice(i, i + 7));
}

</script>

<template>
 <div class="sidebar">
    <!-- LinkedIn Feed Widget (Static Placeholder) -->
    <div class="sidebar-widget">
        <h3 class="widget-title">{{ t('sidebar.linkedinTitle') }}</h3>
        <div class="linkedin-post">
            <div class="post-header">
                <div class="post-avatar">
                    <img src="/logo.webp" alt="Company Logo Avatar">
                </div>
                <div>
                    <div class="post-author">{{ t('sidebar.linkedinPost1Author') }}</div>
                    <div class="post-date">{{ t('sidebar.linkedinPost1Date') }}</div>
                </div>
            </div>
            <p>{{ t('sidebar.linkedinPost1Text') }}</p>
        </div>
        <div class="linkedin-post">
            <div class="post-header">
                <div class="post-avatar">
                    <img src="/logo.webp" alt="Company Logo Avatar">
                </div>
                <div>
                    <div class="post-author">{{ t('sidebar.linkedinPost2Author') }}</div>
                    <div class="post-date">{{ t('sidebar.linkedinPost2Date') }}</div>
                </div>
            </div>
            <p>{{ t('sidebar.linkedinPost2Text') }}</p>
        </div>
    </div>

    <!-- Calendar Widget (Static Placeholder) -->
    <div class="sidebar-widget">
        <h3 class="widget-title">{{ t('sidebar.calendarTitle') }}</h3>
        <table class="calendar">
            <thead>
                <tr>
                    <th colspan="7">{{ t('sidebar.calendarMonth') }}</th>
                </tr>
                <tr>
                    <!-- Consider localizing day names if needed -->
                    <th>Mo</th><th>Di</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th>
                </tr>
            </thead>
            <tbody>
                 <tr v-for="(row, rowIndex) in calendarRows" :key="rowIndex">
                    <td v-for="(day, dayIndex) in row" :key="dayIndex" :class="{ 'event': day.event }">
                        {{ day.date }}
                    </td>
                </tr>
            </tbody>
        </table>
        <p style="margin-top: 15px; font-size: 14px;">
            <span class="event" style="padding: 2px 6px; display: inline-block; margin-right: 5px;"></span> {{ t('sidebar.calendarEventLegend') }}
        </p>
    </div>
 </div>
</template>

<style scoped>
/* Sidebar-specific styles */
.calendar .event {
    /* Ensure styles from global CSS apply, or override here */
    background-color: rgba(0, 166, 118, 0.1);
    color: var(--color-primary);
    font-weight: bold;
    border-radius: 4px;
}
.sidebar-widget p > span.event {
    background-color: rgba(0, 166, 118, 0.3); /* Make legend marker more visible */
    border-radius: 4px;
    width: 10px;
    height: 10px;
    vertical-align: middle;
}

.post-avatar img {
    /* Ensure image fits the container */
    width: 100%;
    height: 100%;
    object-fit: cover; /* Or 'contain' depending on logo aspect ratio */
}
</style> 