import { Task } from '../models/task';

export const getMockTasks = (): Task[] => [
  new Task('1', 'los soprano', 'David Chase', '1999', '5', '21'),
  new Task(
    '2',
    'Game of Trones',
    'David Benioff D.B.Weiss',
    '2011',
    '0',
    '164'
  ),
  new Task('3', 'Mad Men', 'Matthew Weiner', '2007', '5', '116'),
  new Task('4', '6 feet under', 'Alan Ball', '2001', '5', '53'),
];
