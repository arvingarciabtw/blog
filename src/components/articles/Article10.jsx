function Article10() {
  return (
    <>
      <p>
        This week, I finished the{' '}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/databases"
          target="_blank"
          rel="noopener noreferrer"
        >
          Databases course
        </a>{' '}
        from The Odin Project! The course itself is short, but the linked
        interactive tutorials were quite hefty in material. So, I'll go over the
        concepts <i>briefly</i>, to keep this article's length manageable. I'll
        link the interactive tutorials at the end if you'd like to practice and
        explore!
      </p>
      <p>
        Before diving into what SQL is, let's go over what a database is. As the
        name implies, a database is essentially an organized collection of data.
        These data can be classified as either structured data or unstructured
        data.
      </p>
      <p>
        There are many kinds of databases, which stores data differently from
        one another. This{' '}
        <a
          href="https://estuary.dev/blog/types-of-databases-with-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        goes over the various types of databases. But, for the purpose of
        learning SQL, we'll focus on relational databases and what a relational
        database management system (RDBMS) is.
      </p>
      <p>
        You can think of a relational database as a spreadsheet. So, it simply
        organizes data into tables that have rows and columns. A table holds
        data about a specific entity (e.g. users), a row is simply one record
        (e.g. a <i>user</i> in our users table), and a field would be the data
        for a specific attribute in a row/record (e.g. we have a name column,
        and this user's name is <i>Bob</i>).
      </p>
      <p>
        As you might have noticed, I used the term field instead of column.
        While these terms are typically used interchangeably, they are
        technically different. A column is the set of data values for a specific
        type, while a field is the data value for a specific row (or record).
        This{' '}
        <a
          href="https://advancedsqlpuzzles.com/2023/06/23/attributes-fields-and-columns/"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        explains the difference of the two terms.
      </p>
      <p>
        On the other hand, an RDBMS is the software that manages these
        relational databases. Popular relational database management systems
        include PostgreSQL, MySQL, and SQLite. These RDBMSes have some
        differences, but they all use SQL.
      </p>
      <p>
        Now with that out of the way, what is SQL? It stands for Structured
        Query Language, and it is basically the programming language used for
        communicating with a relational database. The main actions are
        synonymous to CRUD (Create, Read, Update, Delete), but the keywords in
        SQL are just a bit different for some of it.
      </p>
      <p>
        The concepts when doing 'read' queries go pretty deep, so I'll go over
        the other main actions first!
      </p>
      <p>
        To create a database, you'd use{' '}
        <code>
          CREATE DATABASE
          <i>
            <code>database_name;</code>
          </i>
        </code>
        . To create a table, you'd do:
      </p>
      <pre>{`
CREATE TABLE table_name (
    column1_name datatype, -- id INTEGER,
    column2_name datatype, -- name TEXT,
    column3_name datatype, -- age INTEGER,
   ....
); 
      `}</pre>
      <p>
        Just to be clear, <code>--</code> is how you write comments in SQL.
      </p>
      <p>
        Now, if you'd want to 'create' a new record for a table,{' '}
        <code>CREATE</code> is <i>not</i> the appropriate keyword. You would use
        the <code>INSERT INTO</code> keyword, along with <code>VALUES</code>{' '}
        like so:
      </p>
      <pre>{`
INSERT INTO table_name (column1_name, column2_name, column3_name, ...)
VALUES (value1, value2, value3, ...); 
      `}</pre>
      <p>
        Optionally, you can omit the column names, but it's better to include
        them to follow best practices.
      </p>
      <p>
        Update and delete queries are pretty easy to remember, since you'd use
        the <code>UPDATE</code> and <code>DELETE</code> keywords! To update or
        modify any records in a table, you'd do:
      </p>
      <pre>{`
UPDATE table_name
SET column1_name = value1, column2 = value2, ...
WHERE condition; 
      `}</pre>
      <p>
        To delete records from a table, you'd do{' '}
        <code>DELETE FROM table_name WHERE condition;</code>.
      </p>

      <p>
        However, if you want to delete a database or table instead of records,
        you'd use the <code>DROP</code> keyword. So, deleting a database would
        be{' '}
        <code>
          DROP DATABASE
          <i>
            <code>database_name;</code>
          </i>
        </code>{' '}
        while deleting a table would be <code>DROP TABLE table_name;</code>
      </p>
      <p>
        Now, for 'read' queries, there's a lot to cover! First, you'd use the{' '}
        <code>SELECT</code> keyword to select data from a database. It would
        look like this:
      </p>
      <pre>{`
SELECT column1_name, column2_name, ...
FROM table_name;
      `}</pre>
      <p>
        The query above would display all of the records from the table name
        specified, showing only the columns specified. But if you'd want to show{' '}
        <i>all</i> of the columns, then you'd do{' '}
        <code>SELECT * FROM table_name;</code>, where <code>*</code> just simply
        means 'all columns'.
      </p>
      <p>
        Expanding from this, we can introduce something called a{' '}
        <code>WHERE</code> clause, which is used to filter records. So, this{' '}
        <code>SELECT * FROM users WHERE name = 'Bob';</code> would simply select
        all records that have a name of Bob, showing all of the columns because
        we used <code>*</code>.
      </p>
      <p>
        Furthermore, we can introduce something called an <code>IN</code>{' '}
        operator, which allows you to specify multiple values. It's essentially
        the same as having multiple <code>OR</code> conditions. So,{' '}
        <code>SELECT * FROM users WHERE name IN ('Amy', 'Bob', 'Carl');</code>{' '}
        would select records that have a name of Amy, Bob, or Carl.
      </p>
      <p>
        In our <code>WHERE</code> clause, we can also have a <code>LIKE</code>{' '}
        operator which searches for a specified pattern in a column. When using
        this operator, we have access to two <i>wildcards</i>, <code>%</code>{' '}
        and <code>_</code>. It's probably easier to explain with examples.
      </p>
      <p>
        <code>SELECT * FROM users WHERE name LIKE 'B%';</code> would select
        records that have a name that <i>starts</i> with the letter B (e.g. Bob,
        Bert, Bartholomew).{' '}
        <code>SELECT * FROM users WHERE name LIKE '%b';</code> would select
        records that have a name that <i>ends</i> with the letter 'b' (e.g. Bob,
        Jacob, Caleb). <code>SELECT * FROM users WHERE name LIKE '%ob%';</code>{' '}
        would select records that have a name that <i>contains</i> the phrase
        'ob' anywhere in the name (e.g. Bob, Bobby, Jacob).
      </p>
      <p>
        As for the <code>_</code> wildcard, it simply means that the position
        where the <code>_</code> is at can be any character. So,{' '}
        <code>SELECT * FROM users WHERE name LIKE '_ob';</code> would select all
        records that have a name similar to the pattern we specified (e.g. Bob,
        Rob, Lob);
      </p>
      <p>
        Aside from a simple <code>SELECT</code> statement, you can use the{' '}
        <code>SELECT DISTINCT</code> statement to only return <i>distinct</i>{' '}
        values. So, something like <code>SELECT DISTINCT name FROM users;</code>{' '}
        would return distinct names (e.g. duplicate users that also have the
        name Bob would not be returned).
      </p>
      <p>
        Another useful keyword to know is <code>ORDER BY</code>, which sorts the
        resulting records based on the column you specify. So,{' '}
        <code>SELECT * FROM users ORDER BY age;</code> would select all the
        records from the users table, but it would be sorted by age. You can add
        the <code>ASC</code> or <code>DESC</code> keyword at the end to specify
        if it will be sorted in ascending or descending order. If you don't
        specify it, then by default it will be sorted in ascending order.
      </p>
      <p>
        SQL also has keywords for logical operators: <code>AND</code>,{' '}
        <code>OR</code>, <code>NOT</code>. You can add these in your{' '}
        <code>WHERE</code> clause, and it would work as you would expect. So,{' '}
        <code>SELECT * FROM users WHERE name = 'Bob' AND age = '25';</code>{' '}
        would select records that have the name Bob and an age of 25.
      </p>
      <p>
        In SQL, you also have a <code>CASE</code> expression, which you can
        simply think of as an if-else statement. The syntax for it looks like
        this:
      </p>
      <pre>{`
CASE
  WHEN condition1 THEN result1
  WHEN condition2 THEN result2
  WHEN condition3 THEN result3
  ELSE result
END; 
      `}</pre>
      <p>
        An important concept to know in SQL are aggregate functions. These are
        functions that perform calculations on a set of values, then returns a
        single value. Oftentimes, you would use these with the{' '}
        <code>GROUP BY</code> statement which I'll go over in a bit. The most
        commonly used aggregate functions are <code>COUNT()</code>,{' '}
        <code>SUM()</code>, <code>AVG()</code>,<code>MIN()</code>, and{' '}
        <code>MAX()</code>.
      </p>
      <p>
        Each of these aggregate functions would do what their name implies. So,
        for example, <code>SELECT COUNT(*) FROM users WHERE name = 'Bob';</code>{' '}
        would return the count of records that have the name of Bob.{' '}
        <code>SELECT SUM(age) FROM users WHERE name = 'Bob';</code> would return
        the sum of ages from all records that have the name of Bob.
      </p>
      <p>
        Now, as for the <code>GROUP BY</code> statement, it groups rows that
        have the same values into summary rows. This is used with aggregate
        functions to group the resulting records by one or more columns. So, in
        this example:
      </p>
      <pre>{`
SELECT COUNT(customer_id), country
FROM customers
GROUP BY country;
      `}</pre>
      <p>The query will select the number of customers in each country.</p>
      <p>
        When the records have been selected, the column name for{' '}
        <code>COUNT(customer_id)</code> is just that,{' '}
        <code>COUNT(customer_id)</code>. We can use something called a column
        alias by changing this column's name through the <code>AS</code>{' '}
        keyword. So if we do this:
      </p>
      <pre>{`
SELECT COUNT(customer_id) AS num_of_customers, country
FROM customers
GROUP BY country;
      `}</pre>
      <p>
        The column's name will now be <code>num_of_customers</code> when the
        records get selected.
      </p>
      <p>
        Another vital concept to understand in SQL is joining tables. We can
        combine rows from two or more tables with a <code>JOIN</code> clause,
        based on a related column between them (which would typically be an id).
        A table will pretty much always have an id column, to make sure that
        each record is unique.
      </p>
      <p>
        There are four different types of <code>JOIN</code>s:{' '}
        <code>INNER JOIN</code>, <code>LEFT OUTER JOIN</code>,{' '}
        <code>RIGHT OUTER JOIN</code>, and <code>FULL OUTER JOIN</code>. The
        keywords <code>INNER</code> and <code>OUTER</code> can be omitted.{' '}
        <code>INNER JOIN</code> returns the records that have matching values in
        both tables, <code>LEFT JOIN</code> returns all of the records from the
        left table and the matched records from the right table.{' '}
        <code>RIGHT JOIN</code> is essentially the same as{' '}
        <code>LEFT JOIN</code> but reversed, while <code>FULL JOIN</code>{' '}
        combines all rows and returns the value <code>NULL</code> for unmatched
        rows.
      </p>
      <p>
        TO better visualize what happens when you do these <code>JOIN</code>{' '}
        statements, I recommend taking a look at this{' '}
        <a
          href="https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{' '}
        from Jeff Atwood. It's a concise, quick, visual read on SQL{' '}
        <code>JOIN</code>s.
      </p>
      <p>
        Apart from aggregate functions, SQL also has window functions. Now,
        there's quite a good amount of window functions, and this article has
        already been quite long so I won't go through each of them. But, if
        you'd like to explore further, you can read this{' '}
        <a
          href="https://www.sqltutorial.org/sql-window-functions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>
        .
      </p>
      <p>
        And I've pretty much covered most of what I've learned in the Databases
        course. Apart from these keywords, it's worth taking a look as well at
        this{' '}
        <a
          href="https://www.sqlstyle.guide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SQL style guide
        </a>{' '}
        to have better formatting. It's also worth reading up on a query's{' '}
        <a
          href="https://sqlbolt.com/lesson/select_queries_order_of_execution"
          target="_blank"
          rel="noopener noreferrer"
        >
          order of execution
        </a>
        .
      </p>
      <p>
        If you'd like to put in some practice with SQL, I recommend doing{' '}
        <a
          href="https://sqlbolt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SQLBolt
        </a>{' '}
        and{' '}
        <a
          href="https://sqlzoo.net/wiki/SQL_Tutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          SQLZoo
        </a>
        . These were the interactive tutorials linked in The Odin Project and I
        can say with 100% confidence that it will get you comfortable with SQL!
      </p>
      <p>
        And that's about it for this week. I'm now on the Node.js course, so
        expect something about Node.js for the next article!
      </p>
    </>
  );
}

export default Article10;
