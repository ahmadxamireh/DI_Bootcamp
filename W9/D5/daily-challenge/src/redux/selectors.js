import { createSelector } from "@reduxjs/toolkit";

export const selectAllTasks = state => state.tracker.tasks;
export const selectAllCategories = state => state.tracker.categories;

export const selectTasksByCategory = (categoryId) =>
    createSelector(
        [ selectAllTasks ],
        (tasks) => tasks.filter(task => task.id === categoryId)
    );

export const selectCompletedTasks = createSelector(
    [ selectAllTasks ],
    (tasks) => tasks.filter(task => task.completed)
);

export const selectCategoryById = (categoryId) =>
    createSelector(
        [ selectAllCategories ],
        (categories) => categories.find(category => category.id === categoryId)
    );