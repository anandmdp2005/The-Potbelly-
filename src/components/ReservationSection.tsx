import { useState, useId } from 'react';
import { Calendar, Users, Clock, Send, Phone, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

export function ReservationSection() {
  const nameId = useId();
  const phoneId = useId();
  const dateId = useId();
  const timeId = useId();
  const guestsId = useId();
  const notesId = useId();

  // Today's date in YYYY-MM-DD format for min constraint
  const todayString = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: todayString,
    time: '19:30',
    guests: '2',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationData, string>>>({});
  const [inquiryDispatched, setInquiryDispatched] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationData, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (minimum 2 characters)';
    }

    const cleanedPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    } else if (formData.date < todayString) {
      newErrors.date = 'Selected date cannot be in the past';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred dining time';
    }

    if (!formData.guests || Number(formData.guests) < 1) {
      newErrors.guests = 'Please specify at least 1 guest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Construct formatted inquiry message
    const message = `Hello The Potbelly Patna, I would like to inquire about table availability:
• Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim()}
• Date: ${formData.date}
• Time: ${formData.time}
• Guests: ${formData.guests} person(s)
${formData.specialRequests.trim() ? `• Special Notes: ${formData.specialRequests.trim()}` : ''}

Please confirm availability and table reservation. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Mark inquiry dispatched state
    setInquiryDispatched(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservations" className="py-20 sm:py-28 bg-[#F5F1EB] text-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C06038] mb-2">
            Table Reservations
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4"
            style={{ textWrap: 'balance' }}
          >
            Plan Your Visit
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Send an instant reservation inquiry directly to our team at The Potbelly – Patna. We will review table availability and confirm your booking.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-stone-200/90 shadow-md p-6 sm:p-10">
          {inquiryDispatched ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Inquiry Prepared & Sent
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed mb-6 font-light">
                Your reservation details have been forwarded to The Potbelly Patna on WhatsApp. Please await direct confirmation from our staff before arriving.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Verify Now ({RESTAURANT_INFO.phone})</span>
                </a>
                <button
                  type="button"
                  onClick={() => setInquiryDispatched(false)}
                  className="px-4 py-2 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor={nameId} className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#C06038]">*</span>
                  </label>
                  <input
                    type="text"
                    id={nameId}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 rounded-md border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1F3A2B] ${
                      errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300 bg-stone-50/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor={phoneId} className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Contact Phone Number <span className="text-[#C06038]">*</span>
                  </label>
                  <input
                    type="tel"
                    id={phoneId}
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-4 py-2.5 rounded-md border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1F3A2B] ${
                      errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300 bg-stone-50/50'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor={dateId} className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Preferred Date <span className="text-[#C06038]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id={dateId}
                      required
                      min={todayString}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1F3A2B] ${
                        errors.date ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300 bg-stone-50/50'
                      }`}
                    />
                    <Calendar className="w-4 h-4 text-stone-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                  {errors.date && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor={timeId} className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Preferred Time <span className="text-[#C06038]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      id={timeId}
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1F3A2B] ${
                        errors.time ? 'border-rose-400 bg-rose-50/50' : 'border-stone-300 bg-stone-50/50'
                      }`}
                    />
                    <Clock className="w-4 h-4 text-stone-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                  {errors.time && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.time}</span>
                    </p>
                  )}
                </div>

                {/* Number of Guests */}
                <div className="sm:col-span-2">
                  <label htmlFor={guestsId} className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Number of Guests <span className="text-[#C06038]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id={guestsId}
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1F3A2B]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People (Standard Table)</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People (Family Table)</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                      <option value="8">8 People (Large Group)</option>
                      <option value="10">10+ People (Private Group)</option>
                    </select>
                    <Users className="w-4 h-4 text-stone-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="sm:col-span-2">
                  <label htmlFor={notesId} className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Special Requests or Dietary Notes (Optional)
                  </label>
                  <textarea
                    id={notesId}
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="e.g. Birthday celebration, outdoor seating preference, high chair needed..."
                    className="w-full px-4 py-2.5 rounded-md border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1F3A2B]"
                  />
                </div>
              </div>

              {/* Submit CTA & Fallback */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request a Reservation</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span>Prefer direct calling?</span>
                  <a
                    href={RESTAURANT_INFO.phoneTel}
                    className="font-semibold text-[#1F3A2B] hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{RESTAURANT_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Important Clarification Note */}
              <p className="text-[11px] text-stone-500 text-center leading-normal">
                * Note: Submitting this inquiry forwards your request to the restaurant team via WhatsApp/phone. Tables are subject to direct availability and confirmation by the restaurant staff.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
