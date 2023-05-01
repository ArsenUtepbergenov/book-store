<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <slot name="header">
            <button
              type="button"
              class="close modal-close text-light"
              @click="$emit('close')"
              aria-label="Close modal window"
            >
              <svg
                width="1.4em"
                height="1.4em"
                viewBox="0 0 16 16"
                class="bi bi-x-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                />
              </svg>
            </button>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer bg-dark">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
