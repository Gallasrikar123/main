import { Armchair } from 'lucide-react';

export default function SeatBooking({ bookedSeats, toggleSeat }) {
  return (
    <section className="seat-card">
      <h2>Reserve Seats</h2>
      <div className="screen-line">QuickBytes Dining</div>
      <div className="seat-grid">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((seat) => (
          <button key={seat} className={bookedSeats.includes(seat) ? 'seat selected' : 'seat'} onClick={() => toggleSeat(seat)} aria-label={`Seat ${seat}`}>
            <Armchair size={18} />
            <span>{seat}</span>
          </button>
        ))}
      </div>
      <p>{bookedSeats.length} seat{bookedSeats.length === 1 ? '' : 's'} selected</p>
      <button className="checkout-btn">Confirm booking</button>
    </section>
  );
}