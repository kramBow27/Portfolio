


function openModal(modalId) {
    console.log("clicado")
    document.getElementById(modalId).style.display = "flex";
    
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
function closeModal7(modalId) {
    closeModal(modalId)
    scrollToJoe()
}
function scrollToJoe() {
      document.querySelector('.joe-block').scrollIntoView({
        behavior: 'smooth'
      });
    }
var dragModal = (function () {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  return function (el, header) {
    if (document.getElementById(header)) {
      document.getElementById(header).onmousedown = dragMouseDown;
    } else {
      el.onmousedown = dragMouseDown;
    }

      function dragMouseDown(e) {
         console.log('Mouse Down');
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      el.style.top = el.offsetTop - pos2 + "px";
      el.style.left = el.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  };
})();


    const sqlStrings = [
     `SELECT sub.*,
       (Janeiro + Fevereiro + Marco + Abril + Maio + Junho + Julho + Agosto + Setembro + Outubro + Novembro + Dezembro) AS TOTAL,
        (Total_Janeiro + Total_Fevereiro + Total_Marco + Total_Abril + Total_Maio + Total_Junho + Total_Julho + Total_Agosto + Total_Setembro + Total_Outubro + Total_Novembro + Total_Dezembro) AS TOTAL_GERAL FROM (

SELECT
    dados.*, 
    logo.logo, 
    cliente.razaoSocial,
    COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '01' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Janeiro, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '02' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Fevereiro, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '03' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Marco, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '04' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Abril, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '05' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Maio, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '06' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Junho, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '07' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Julho, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '08' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Agosto, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '09' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Setembro, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '10' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Outubro, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '11' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Novembro, 
COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '12' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER () AS Total_Dezembro,

 COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '01' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Janeiro, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '02' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Fevereiro, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '03' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Marco, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '04' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Abril, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '05' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Maio, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '06' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Junho, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '07' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Julho, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '08' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Agosto, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '09' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Setembro, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '10' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Outubro, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '11' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Novembro, 
  COUNT(CASE WHEN TO_CHAR(dados.data_abertura, 'MM') = '12' AND dados.data_abertura BETWEEN dataInicial AND dataFinal THEN 1 END) OVER (PARTITION BY objeto) AS Dezembro
FROM

(
 select
         gd.documentos_id as id,
         'Documentos' as plotagem,
         {dataInicial} as dataInicial,
         {dataFinal} as dataFinal,
         gd.identificacao as identificacao,
         gd.data_abertura as data_abertura,
         gd.data_encerramento as data_encerramento,
         
         tpd.tipos_documentos_id as tipo_documento_id,
         tpd.descricao as tipo_documento,
         obj.objeto_documento_id as objeto_documento_id,
         obj.descricao as objeto,
        
         decode(gd.status, 0, 'Ativo', 1, 'Aguardando Informações', 2, 'Pedido de Vista', 3, 'Acautelado', 4, 'Extinto', 5, 'Solicitação Cancelada', 6, 'Resposta do Interessado', 7, 'Solicitação Pendente', 8, 'Solicitação Executada', 9, 'Encerrado', 10, 'Arquivado') as situacao,
        SUM(
   CASE
      WHEN
         (
            gd.status NOT IN (9, 10)
            AND TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
         )
         OR
         (
            gd.status IN (9, 10)
            AND TRUNC(gd.data_encerramento) >= {dataInicial}
            AND TRUNC(gd.data_encerramento) <= {dataFinal}
            AND TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
         )
      THEN
         1 
      ELSE
         0 
   END
) OVER (PARTITION BY tpd.descricao) AS documentos_abertos_tipo,
SUM(
   CASE
      WHEN
         gd.status IN (9, 10)
         AND (
            TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
            OR
            TRUNC(gd.data_encerramento) >= {dataInicial}
            AND TRUNC(gd.data_encerramento) <= {dataFinal}
         )
      THEN
         1 
      ELSE
         0 
   END
) OVER (PARTITION BY tpd.descricao) AS documentos_fechados_tipo,
 SUM(
   CASE
      WHEN
         (
            gd.status NOT IN (9, 10)
            AND TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
         )
         OR
         (
            gd.status IN (9, 10)
            AND TRUNC(gd.data_encerramento) >= {dataInicial}
            AND TRUNC(gd.data_encerramento) <= {dataFinal}
            AND TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
         )
      THEN
         1 
      ELSE
         0 
   END
) OVER (PARTITION BY obj.descricao) AS documentos_abertos_objeto,
SUM(
   CASE
      WHEN
         gd.status IN (9, 10)
         AND (
            TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
            OR
            TRUNC(gd.data_encerramento) >= {dataInicial}
            AND TRUNC(gd.data_encerramento) <= {dataFinal}
         )
      THEN
         1 
      ELSE
         0 
   END
) OVER (PARTITION BY obj.descricao) AS documentos_fechados_objeto,
 SUM(
         CASE
          WHEN
               (
            gd.status NOT IN (9, 10)
            AND TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
         )
         OR
         (
            gd.status  IN (9, 10)
            AND TRUNC(gd.data_encerramento) >= {dataInicial}
            AND TRUNC(gd.data_encerramento) <= {dataFinal}
            AND TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
         )
            THEN
               1 
            ELSE
               0 
         END
) OVER () AS total_documentos_abertos, SUM(
         CASE
           WHEN
               gd.status IN 
               (
                  9, 10
               )  AND (
            TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
            OR
            TRUNC(gd.data_encerramento) >= {dataInicial}
            AND TRUNC(gd.data_encerramento) <= {dataFinal}
         )
            THEN
               1 
            ELSE
               0 
         END
) OVER () AS total_documentos_fechados, 
         CASE
            WHEN
               gd.status IN 
               (
                  9, 10
               )  AND (
            TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
            OR
            TRUNC(gd.data_encerramento) >= {dataInicial}
            AND TRUNC(gd.data_encerramento) <= {dataFinal}
         )
            THEN
               1 
            ELSE
               NULL 
         END
         as documento_fechado, 
         CASE
            WHEN
               (
            gd.status NOT IN (9, 10)
            AND TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
         )
         OR
         (
            gd.status  IN (9, 10)
            AND TRUNC(gd.data_encerramento) >= {dataInicial}
            AND TRUNC(gd.data_encerramento) <= {dataFinal}
            AND TRUNC(gd.data_abertura) >= {dataInicial}
            AND TRUNC(gd.data_abertura) <= {dataFinal}
         )
            THEN
               1 
            ELSE
               NULL 
         END
         as documento_aberto, 
         CASE
            WHEN
               gd.status IN 
               (
                  9, 10
               )
            THEN
               'Fechado' 
            ELSE
               'Aberto' 
         END
         as status_por_situacao, 
        (
    select
        count(*) 
    from
        gd_documentos d 
    where
        (TRUNC(d.data_abertura) >= {dataInicial} AND TRUNC(d.data_abertura) <= {dataFinal})
        OR
        (d.status IN (9, 10) AND TRUNC(d.data_encerramento) >= {dataInicial} AND TRUNC(d.data_encerramento) <= {dataFinal})
)
as documentos_abertos,
(
    select
        count(*) 
    from
        gd_documentos d 
    where
        (d.status IN (9, 10) AND TRUNC(d.data_abertura) >= {dataInicial} AND TRUNC(d.data_abertura) <= {dataFinal})
        OR
        (d.status IN (9, 10) AND TRUNC(d.data_encerramento) >= {dataInicial} AND TRUNC(d.data_encerramento) <= {dataFinal})
)
as documentos_fechados,
         CASE
            WHEN
               gd.data_encerramento IS NULL 
            THEN
               1 
            ELSE
               0 
         END
         as status_documento 
      from
         gd_documentos gd 
         
         left join
            gd_objeto_documentos obj 
            on gd.objeto_documentos_id = obj.objeto_documento_id 
         left join
            gd_tipos_documentos tpd 
            on obj.tipo_documento_id = tpd.tipos_documentos_id 
        
         
      where
   (
      (tpd.tipos_documentos_id like '%{tipo_documento}%' 
       or '{tipo_documento}' is null)
   )
   and 
   (
      (obj.objeto_documento_id like '%{gdTipoObjeto}%' 
       or '{gdTipoObjeto}' is null)
   )
   and (
         (TRUNC(gd.data_abertura) >= {dataInicial} AND TRUNC(gd.data_abertura) <= {dataFinal})
         OR
         (TRUNC(gd.data_encerramento) >= {dataInicial} AND TRUNC(gd.data_encerramento) <= {dataFinal})
       )
   AND {dataFinal} <= ADD_MONTHS({dataInicial}, 12) 
 
      order by
         tpd.descricao
)
dados,
(
    SELECT p.valor_blob as logo 
    FROM CB_PARAMETROS p 
    WHERE p.nome = 'administracao.cliente.logo'
) logo,
(
    SELECT p.valor_texto as razaoSocial 
    FROM CB_PARAMETROS p 
    WHERE p.nome = 'administracao.cliente.razaoSocial'
) cliente) sub ORDER BY sub.tipo_documento

`,
        `SELECT 
A.DATA_AGENDADA as dataAgendamento,
A.NOME_SOLICITANTE as nomeContribuinte, 
{dataInicial} as dataInicial,
{dataFinal} as dataFinal,
S.NOME as servicoRealizado,
(EXTRACT(DAY FROM (A.DATA_TERMINO_ATENDIMENTO - A.DATA_INICIO_ATENDIMENTO) DAY TO SECOND) * 24 * 60) +
  (EXTRACT(HOUR FROM (A.DATA_TERMINO_ATENDIMENTO - A.DATA_INICIO_ATENDIMENTO) DAY TO SECOND) * 60) +
  (EXTRACT(MINUTE FROM (A.DATA_TERMINO_ATENDIMENTO - A.DATA_INICIO_ATENDIMENTO) DAY TO SECOND)) AS diferencaEmMinutos,
    SUM(
    (EXTRACT(DAY FROM (A.DATA_TERMINO_ATENDIMENTO - A.DATA_INICIO_ATENDIMENTO) DAY TO SECOND) * 24 * 60) +
    (EXTRACT(HOUR FROM (A.DATA_TERMINO_ATENDIMENTO - A.DATA_INICIO_ATENDIMENTO) DAY TO SECOND) * 60) +
    (EXTRACT(MINUTE FROM (A.DATA_TERMINO_ATENDIMENTO - A.DATA_INICIO_ATENDIMENTO) DAY TO SECOND))
  ) OVER () AS somaTotalDiferencaEmMinutos,
DECODE(A.STATUS,
    0, 'Pendente',
    1, 'Confirmado',
    2, 'Cancelado',
    3, 'Vazio',
    4, 'Iniciado',
    5, 'Finalizado'
    
  
  ) AS status,   
  SUM(CASE WHEN A.STATUS = 0 THEN 1 ELSE 0 END) OVER () AS pendente,
  SUM(CASE WHEN A.STATUS = 1 THEN 1 ELSE 0 END) OVER () AS confirmado,
  SUM(CASE WHEN A.STATUS = 2 THEN 1 ELSE 0 END) OVER () AS cancelado,
  SUM(CASE WHEN A.STATUS = 3 THEN 1 ELSE 0 END) OVER () AS vazio,
  SUM(CASE WHEN A.STATUS = 4 THEN 1 ELSE 0 END) OVER () AS iniciado,
  SUM(CASE WHEN A.STATUS = 5 THEN 1 ELSE 0 END) OVER () AS finalizado,
  F.FUN_NOME_FUNCIONARIO as nomeFuncionario 
  FROM CEBISIS.AA_AGENDAMENTOS A
  JOIN CEBISIS.AA_SERVICOS S ON A.SERVICO_ID = S.SERVICO_ID
  JOIN CEBISIS.CB_USUARIOS C ON A.USUARIO_INICIOU_ATEND_ID = C.USUARIO_ID
 JOIN CEBISIS.FUNCIONARIOS F ON C.FUNCIONARIO_ID = F.FUN_SEQ
  WHERE TRUNC(A.DATA_AGENDADA) >= {dataInicial}
  AND TRUNC(A.DATA_AGENDADA) <= {dataFinal}
    AND('0' in ({funcionario}) or F.FUN_SEQ IN ({funcionario}))
  AND('0' in ({servico}) or A.SERVICO_ID IN ({servico}))
  AND A.DATA_INICIO_ATENDIMENTO IS NOT NULL
  AND A.DATA_TERMINO_ATENDIMENTO IS NOT NULL
ORDER BY A.DATA_AGENDADA`
    ];
function sendEmail() {
    console.log("entrou na função")
    try {
        const username = encodeURIComponent(document.getElementById('username').value);
        const useremail = encodeURIComponent(document.getElementById('useremail').value);
        const message = encodeURIComponent(document.getElementById('message').value);
        
        const subject = `Message from ${username}`;
        const body = `${message}`;
        
        // Verificando se o e-mail do usuário é um Gmail
       if (useremail.endsWith('gmail.com')) {
           console.log("entrou na função google")
            window.location.href = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info.vluna@yahoo.com&su=${subject}&body=${message}`;

       } else {
          console.log("entrou na função outro email")
            window.location.href = `mailto:info.vluna@yahoo.com?subject=${subject}&body=${body}`;
        }
    } catch (e) {
        alert("Não foi possível abrir o cliente de e-mail. Por favor, envie um e-mail manualmente para info.vluna@yahoo.com");
    }
}


 function changeLanguage(selectedLang) {
          
            if (selectedLang === 'en') {
                window.location.href = 'indexEnglish.html';
            } else {
               window.location.href = 'index.html';
            }
        }

document.addEventListener("DOMContentLoaded", function () {
  // Carrega a função dragModal somente após o DOM estar completamente carregado
  dragModal(document.getElementById("modal1"), "modalHeader1");
  dragModal(document.getElementById("modal2"), "modalHeader2");
  dragModal(document.getElementById("modal3"), "modalHeader3");
    dragModal(document.getElementById("modal4"), "modalHeader4");
    dragModal(document.getElementById("modal5"), "modalHeader5");
    dragModal(document.getElementById("modal6"), "modalHeader6");
     dragModal(document.getElementById("modal7"), "modalHeader7");
});

// Variável para armazenar o conteúdo original em português
let originalJoeBlock = null;

// Variável para armazenar o conteúdo em inglês
let englishJoeBlock = null;

function changeLanguageJoe(selectedLang) {
   console.log("fui clicado")
  const joeBlockElement = document.getElementById('joeBlock');

  if (selectedLang === 'en') {
    if (englishJoeBlock === null) {
      fetch('indexEnglish.html')
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          englishJoeBlock = doc.querySelector('.joe-block').outerHTML;
          
          // Salva o conteúdo original antes de alterá-lo
          originalJoeBlock = joeBlockElement.outerHTML;

          // Altera o conteúdo
          joeBlockElement.outerHTML = englishJoeBlock;
        })
        .catch(error => {
          console.error('Erro ao buscar o arquivo indexEnglish.html: ', error);
        });
    } else {
      // Salva o conteúdo original antes de alterá-lo
      originalJoeBlock = joeBlockElement.outerHTML;

      // Altera o conteúdo
      joeBlockElement.outerHTML = englishJoeBlock;
    }
  } else {
    if (originalJoeBlock !== null) {
      // Reverte para o conteúdo original
      joeBlockElement.outerHTML = originalJoeBlock;
    }
  }
}
