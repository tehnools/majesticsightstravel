import React from 'react'

export default function ContactCard({ name, phoneNumber, email, image }) {
return <div class="contact card">
    <div class="card-image">
    </div>
    <div class="card-content">
      <div class="card-header">
        <p class="title is-4">
          {name}
        </p>
      </div>
      <br />
      <div class="rows">
        <div class="row is-centered">
          <span class="icon is-small">
            <i class="fas fa-mobile-alt"></i>
          </span>
          <span>
            {phoneNumber}
          </span>
        </div>
        <div class="row is-centered">
          <button class="button is-primary">
            <span class="icon is-small">
              <i class="fas fa-envelope"></i>
            </span>
            <span>
              Email Now
          </span>
          </button>
        </div>
      </div>

    </div>
  </div>
}