function loadBoard(){
    var N = 9;
    var board = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
    ];
    for(var i=0; i<N; i++){
        for(var j=0; j<N; j++){
            var c = "r"+i+"c"+j;
            var element = document.getElementsByClassName(c);
            element[0].innerHTML = board[i][j];
        }
    }
}

function solveSudokuRec(board, row, col, N){
    if(row == N){
        printBoard(board, N);
        return true;
    }
    if(col == N){
        return solveSudokuRec(board, row+1, 0, N);
    }
    if(board[row][col] != 0){
        return solveSudokuRec(board, row, col+1, N);
    }
    for(var num=1; num<=9; num++){
        if(canPutNumber(board, row, col, num, N)){
            board[row][col] = num;
            var success = solveSudokuRec(board, row, col+1, N);
            if(success){
                return true;
            }
        }
    }
    board[row][col] = 0;
    return false;
}

function printBoard(board, N){
    for(var i=0; i<N; i++){
        for(var j=0; j<N; j++){
            var c = "r"+i+"c"+j;
            var element = document.getElementsByClassName(c);
            element[0].innerHTML = board[i][j];
        }
    }
}

function canPutNumber(board, row, col, num, N){
    for(var i=0; i<N; i++){
        if(board[row][i] == num){
            return false;
        }
    }

    for(var i=0; i<N; i++){
        if(board[i][col] == num){
            return false;
        }
    }

    //Check 3X3
    var r = Math.floor(row/3)*3;
    var c = Math.floor(col/3)*3;
    for(var i=r; i<r+3; i++){
        for(var j=c; j<c+3; j++){
            if(board[i][j] == num){
                return false;
            }
        }
    }
    
    return true;
}

function solveSudoku(){
    var N = 9;
    var board = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
    ];
    solveSudokuRec(board, 0, 0, N);
}

loadBoard();