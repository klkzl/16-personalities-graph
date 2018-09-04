import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, DELETE_COMPLETED } from '../actions/toDoApp';

const initialState = {
  toDoList: [],
  completedList: []
};

const toDoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, toDoList: [...state.toDoList, action.task ] }
    };
    case DELETE_TASK: {
      return { ...state,
        toDoList: state.toDoList.filter(item => item.id !== action.id),
        completedList: state.completedList.filter(item => item.id !== action.id)
      }
    };
    case TOGGLE_TASK: {
      if (state.toDoList.includes(action.task)) {
        return { ...state,
          toDoList: state.toDoList.filter(item => item.id !== action.task.id),
          completedList: [...state.completedList, action.task]
        }
      } else {
        return { ...state,
          completedList: state.completedList.filter(item => item.id !== action.task.id),
          toDoList: [...state.toDoList, action.task]
        }
      };
    }
    case DELETE_COMPLETED: {
      return { ...state,
        completedList: []
      }
    }
    default:
      return state;
  }
};

export default toDoApp;