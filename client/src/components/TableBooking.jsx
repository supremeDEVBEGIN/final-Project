import React, { useState } from 'react';

function TableBooking() {
    const numRows = 5;
    const numCols = 8;

    const initialTableData = [];
    for (let row = 1; row <= numRows; row++) {
        const rowTables = [];
        for (let col = 1; col <= numCols; col++) {
            const tableName = String.fromCharCode(64 + row) + col;
            const table = {
                id: `${row}-${col}`,
                name: tableName,
                isBooked: false,
                isSelected: false,
            };

            if (row === 1 && col === 3) {
                table.isBooked = true;
            }
            rowTables.push(table);
        }
        initialTableData.push(rowTables);
    }

    const [tableData, setTableData] = useState(initialTableData);
    const [reservationStatus, setReservationStatus] = useState('');

    const reserveTable = (row, col) => {
        const selectedTable = tableData[row - 1][col - 1];
        const updatedTableData = [...tableData];
    
        const numberOfSelectedTables = updatedTableData
            .flatMap((rowTables) => rowTables.filter((table) => table.isSelected))
            .length;
    
        if (selectedTable.isBooked && !selectedTable.isSelected) {
            // ถ้าโต๊ะถูกจองและไม่ถูกเลือกอยู่ให้ยกเลิกการจอง
            updatedTableData[row - 1][col - 1].isBooked = false;
            updatedTableData[row - 1][col - 1].isSelected = false;
        } else if (selectedTable.isSelected) {
            // ถ้าโต๊ะถูกเลือกแล้วให้ยกเลิกการเลือก
            updatedTableData[row - 1][col - 1].isSelected = false;
        } else if (numberOfSelectedTables < 3 && !selectedTable.isBooked) {
            // ถ้าโต๊ะว่างและจำนวนโต๊ะที่ถูกจองไม่เกิน 3 โต๊ะ
            updatedTableData[row - 1][col - 1].isSelected = true;
        }
    
        setTableData(updatedTableData);
    
        const reservedTables = updatedTableData
            .flatMap((rowTables) => rowTables.filter((table) => table.isSelected))
            .map((table) => table.name)
            .join(', ');
    
        setReservationStatus(`คุณได้ทำการจองโต๊ะ ${reservedTables}`);
    };    
    return (
        <div>
            <h2>รูปแบบการจองโต๊ะ</h2>
            <div className="table-container">
                <div className="flex-row">
                    {tableData.map((rowTables, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {rowTables.map((table) => (
                                <div
                                    key={table.id}
                                    className={`table ${table.isBooked ? 'booked' : 'empty'} ${table.isSelected ? 'selected' : ''}`}
                                    onClick={() => reserveTable(rowIndex + 1, parseInt(table.name.substring(1)))}
                                >
                                    {table.name}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="status-text mt-3">
                <div className="status-box empty-box"></div>
                <div>โต๊ะว่าง</div>
                <div className="status-box selected-box"></div>
                <div>โต๊ะที่ถูกเลือก</div>
                <div className="status-box booked-box"></div>
                <div>โต๊ะถูกจอง</div>
            </div>
            <div className="reservation-status mt-3">
                <p>{reservationStatus}</p>
            </div>
        </div>
    );
}

export default TableBooking;
