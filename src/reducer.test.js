import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer 관련 테스트 코드', () => {
  describe('updateTaskTitle', () => {
    it('새로운 state(상태)가 만들어지고 새로운 task title로 변경된다', () => {
      // given
      const initialState = {
        taskTitle: '',
        tasks: [],
      };

      // when
      const state = reducer(initialState, updateTaskTitle('뭐라도 하기'));
      // then
      expect(state.taskTitle).toBe('뭐라도 하기');
    });

    describe('addTask', () => {
      context('새로운 task title 있을 경우', () => {
        it('tasks에 새로운 task가 추가되어야 한다', () => {
        // given
          const setState = {
            taskTitle: '뭐라도 하기',
            tasks: [],
          };

          // when
          const state = reducer(setState, addTask());
          // then
          expect(state.tasks[0].title).toBe('뭐라도 하기');
        });
      });

      context('새로운 task title 없을 경우', () => {
        it('변화가 일어나지 않는다', () => {
        // given
          const setState = {
            taskTitle: '',
            tasks: [],
          };

          // when
          const state = reducer(setState, addTask());
          // then
          expect(state.tasks).toHaveLength(0);
        });
      });
    });

    describe('deleteTask', () => {
      context('task id 있을 경우', () => {
        it('tasks에 task가 삭제된다', () => {
        // given
          const previouState = {
            tasks: [{ id: 1, title: '뭐라도 하기' }],
          };

          const action = {
            type: 'deleteTask',
            payload: {
              id: 1,
            },
          };
          // when
          const state = reducer(previouState, action);
          // then
          expect(state.tasks).toHaveLength(0);
        });

        context('task id 없을 경우', () => {
          it('변화가 일어나지 않는다', () => {
          // given
            const previouState = {
              tasks: [],
            };

            const action = {
              type: 'deleteTask',
              payload: {},
            };
            // when
            const state = reducer(previouState, action);
            // then
            expect(state.tasks).toHaveLength(0);
          });
        });
      });
    });
  });
});
