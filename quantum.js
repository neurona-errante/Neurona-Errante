      // Paso 1: Reemplaza letras con <span>
    function envolverLetras() {
      const container = document.getElementById('content');
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
      const texts = [];

      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.nodeValue.trim().length > 0) {
          texts.push(node);
        }
      }

      texts.forEach(textNode => {
        const parent = textNode.parentNode;
        const fragment = document.createDocumentFragment();

        [...textNode.nodeValue].forEach(char => {
          const span = document.createElement('span');
          span.textContent = char;
          if (char.trim()) {
            span.classList.add('quantum-letter-pending');
          }
          fragment.appendChild(span);
        });

        parent.replaceChild(fragment, textNode);
      });
    }

    // Paso 2: Aplica el efecto cuántico una letra a la vez
    function activarEfectoSecuencial() {
      const letras = document.querySelectorAll('.quantum-letter-pending');
      letras.forEach((letra, i) => {
        setTimeout(() => {
          letra.classList.remove('quantum-letter-pending');
          letra.classList.add('quantum-letter');
        }, i * 100); // velocidad de animación letra por letra
      });
    }

    // Ejecutar a los 10 segundos
    setTimeout(() => {
      envolverLetras();
      activarEfectoSecuencial();
    }, 10000);

    // Redirigir a los 44 segundos
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 99000);
