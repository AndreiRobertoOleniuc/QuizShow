import React from 'react'

function SpielInfo({ player, anzahlRunden }) {
    return (
        <div className="spielerInfo">
            <div className="plate">
                <div className="kontostand">
                    <p className="text">
                        Kontostand: {player.betrag}
                    </p>
                </div>
                <div className="lebensPunkte">
                    <p className="text">
                        Lebenspunkte: {player.lebensPunkt}
                    </p>
                </div>
                <div className="züge">
                    <p className="text">
                        Runde: {anzahlRunden}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SpielInfo
