def get_next_state(current_state, choice):
    match current_state:
        case 0:
            return 0
        case 1:
            return 1
        case other:
            return 2
