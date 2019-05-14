const WHITE = '#f5f6fa';
const rootRoot = { 
	flex: 1 
}

const rootContainer = {
}

const imageWatermark = {
	backgroundColor: '#8c7ae6d0',
	flex: 1, 
}

const headerContainer = {
	paddingTop: 10, 
	paddingBottom: 15, 
	alignItems: 'center', 
	justifyContent: 'center', 
}

const headerText = {
	fontSize: 20, 
	fontWeight: '700', 
	color: WHITE
}

const todoListContainer = {
	borderWidth: 1, 
	borderColor: WHITE
}

const todoItemContainer = {
	flexDirection: 'row', 
	paddingVertical: 10, 
	paddingHorizontal: 10, 
	backgroundColor: WHITE, 
	marginHorizontal: 10, 
	marginVertical: 10
}

const todoItemContentContainer = {
	flex: 4, 
	justifyContent: 'space-around' 
}

const todoItemButtonContainer = {
	flex: 1,
	flexDirection: 'row'
}

const todoItemDeleteButton = {
	backgroundColor: '#b71540', 
	padding: 5,
	alignItems: 'center', 
	justifyContent: 'center',
	flex: 1
}

const todoItemDeleteButtonText = {
	color: WHITE,
	fontSize: 16
}

const todoToggleItemStateButton = {
	backgroundColor: 'green', 
	padding: 5,
	alignItems: 'center', 
	justifyContent: 'center',
	flex: 1,
	marginRight: 4
}

const todoToggleItemStateButtonText = {
	color: WHITE,
	fontSize: 16
}


const newTodoContainer = {
	flexDirection: 'row', 
	borderWidth: 2, 
	borderColor: 'grey'
}
const newTodoContainerInputContainer = {
	flex: 7
}

const newTodoButtonContainer = {
	flex: 2
}

const newTodoButtonContainerButton = {
	backgroundColor: '#95afc0', 
	padding: 10, 
	alignItems: 'center', 
	justifyContent: 'center', 
}

const newTodoButtonContainerButtonText = {
	color: WHITE, 
}

const newTodoInput = {
	backgroundColor: WHITE, 
	fontSize: 16, 
	padding: 10, 
	height: 39,
	borderRightWidth: 5, 
	borderRightColor: 'grey'
}

const todoItemDoneState = {
	color: 'green',
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
}

const todoItemPendingState = {
	color: 'blue'
}

export default {
	rootRoot, 
	rootContainer,

	headerContainer, 
	headerText, 

	todoListContainer, 
	todoItemContainer, 
	todoItemContentContainer, 
	todoItemButtonContainer, 
	todoItemDeleteButton, 
	todoItemDeleteButtonText,
	todoToggleItemStateButton,
	todoToggleItemStateButtonText,

	newTodoContainer, 
	newTodoContainerInputContainer, 
	newTodoButtonContainer, 
	newTodoButtonContainerButton, 
	newTodoButtonContainerButtonText, 
	newTodoInput, 

	imageWatermark,

	todoItemDoneState,
	todoItemPendingState
}